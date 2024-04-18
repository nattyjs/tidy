/*
Release format example
current version - 0.0.3

----------------------------------
Output
----------------------------------
beta        ---     0.0.4-beta.0
major       ---     1.0.0
minor       ---     0.1.0
stable      ---     0.0.11
preminor    ---     0.1.0-beta.0
premjor     ---     1.0.0-beta.0
-----------------------------------
*/

import prompts from 'prompts';
import  path from 'path'
import  semver from 'semver'
import  fs from 'fs'
import {globby} from 'globby';
import {execa} from 'execa';
// console.log(globby)
const packages = ["testing","firebase-functions","azure-functions","cli","common","core","entity","express","forms","orm","types","validation-decorators"];
const rootDir = process.cwd();
const packagesFolderName = 'packages';
const semverParamConfig = {
    premajorbeta :{ first:'premajor', second:'beta' },
    beta :{ first:'prerelease', second:'beta' },
}
function getPackageInfo(packageName){
    const packageDirectory = packageName === "tez" ? rootDir : path.resolve(rootDir,packagesFolderName,packageName);
    const packagePath = path.resolve(packageDirectory,'package.json');
    const packageJson = require(packagePath);
    return {packageJson,packagePath,packageDirectory}; 
}

function getVersion(currentVersion,releaseType){
    let firstParam=releaseType;
    let secondParam = '';
    if(semverParamConfig[releaseType])
    {
        firstParam = semverParamConfig[releaseType].first;
        secondParam = semverParamConfig[releaseType].second;
    }
    return semver.inc(currentVersion,firstParam,secondParam);
}

async function getReleaseType(){
    const {releaseType} = await prompts({
        type: 'select',
        name: 'releaseType',
        message: 'Select release type',
        choices: [
            { title: 'Beta', value: 'beta' },
            { title: 'PreMinor', value: 'preminor' },
            { title: 'Minor', value: 'minor' },
            { title: 'PreMajor', value: 'premajor' },
            { title: 'PreMajor Beta', value: 'premajorbeta' },
            { title: 'Major', value: 'major' },
            { title: 'Stable', value: 'patch' }
          ]
      })
      return releaseType;
}

async function updateDependencies(packageState){
    const packageNames = Object.keys(packageState);
    for(const packageName of packageNames){
        const {packageJson,packagePath,packageDirectory}  = packageState[packageName];
        for(const dependencyPackageName of packageNames){
            if(packageJson.dependencies && packageJson.dependencies[dependencyPackageName])
                packageJson.dependencies[dependencyPackageName] = packageState[dependencyPackageName].packageJson.version
            if(packageJson.devDependencies && packageJson.devDependencies[dependencyPackageName])
                packageJson.devDependencies[dependencyPackageName] = packageState[dependencyPackageName].packageJson.version
        }
        fs.writeFileSync(packagePath,JSON.stringify(packageJson, null, 2) + '\n')

    }
}

async function runCommand( bin,
    args,
    opts = {},isRelease){
        if(isRelease)
           return await execa(bin,args,opts)
        else
            console.log(bin,args,opts)

    
}

async function updateTemplateDependenciesPackage(packageState){
    const filePaths = await globby('packages/create-natty', {
		expandDirectories: {
			files: ['package.json']
		},
        gitignore:true
	});
    const packageNames = Object.keys(packageState);
    for(const packageJsonPath of filePaths){
        const templatePackageJson = require(`${rootDir}/${packageJsonPath}`);
            for(const dependencyPackageName of packageNames){
                if(templatePackageJson.dependencies && templatePackageJson.dependencies[dependencyPackageName])
                    templatePackageJson.dependencies[dependencyPackageName] = packageState[dependencyPackageName].packageJson.version
                if(templatePackageJson.devDependencies && templatePackageJson.devDependencies[dependencyPackageName])
                    templatePackageJson.devDependencies[dependencyPackageName] = packageState[dependencyPackageName].packageJson.version
            }
            fs.writeFileSync(packageJsonPath,JSON.stringify(templatePackageJson, null, 2) + '\n')
}
}

async function publishPackages(packages:Array<{name:string,pkgDir:string}>,isRelease,tag){
    for(const packageInfo of packages){
        await createChangeLog(packageInfo,isRelease)
        if(packageInfo.name !== "tez")
        await runCommand('npm',['publish',"--access","public"],{
            stdio: 'pipe',
            cwd: packageInfo.pkgDir
          },isRelease)
    }
    await createTag(tag,isRelease)
}

async function createChangeLog(packageInfo:{name:string,pkgDir:string},isRelease:boolean){
    const args = [
        'conventional-changelog',
        '-p',
        'angular',
        '-i',
        'CHANGELOG.md',
        '-s',
        '--commit-path',
        '.'
      ]
      args.push('--lerna-package', packageInfo.name)
      await runCommand('npx', args, { cwd: packageInfo.pkgDir },true)
}

async function createTag(tag:string,isRelease:boolean){
    const { stdout } = await execa('git', ['diff'], { stdio: 'pipe' })
  if (stdout) {
    console.log('\nCommitting project changes.')
    await runCommand('git', ['add', '-A'],{},isRelease)
    await runCommand('git', ['commit', '-m', `release: ${tag}`],{},isRelease)
    await runCommand('git', ['tag', tag],{},isRelease)
  } else {
    console.log('No changes to commit.')
    return
  }

  console.log('\nPushing changes to GitHub...')
  await runCommand('git', ['push', 'origin', `refs/tags/${tag}`],{},isRelease)
  await runCommand('git', ['push'],{},isRelease)

  if (!isRelease) {
    console.log(`\n Release Dev Test executed.`)
  } else
    console.log("pushed packages")

}

async function init(){
    
    const releaseType = await getReleaseType();    
    const packageState = {};
    let packageDirectories= new Array<{name:string,pkgDir:string}>();
    let tag:string = null;
    for(let packageName of packages){
        const {packageJson,packagePath,packageDirectory} = getPackageInfo(packageName);
        packageJson.version = getVersion(packageJson.version,releaseType);
        tag = `v${packageJson.version}`;
        console.log(packageJson.name,packageJson.version)
        packageState[packageJson.name] = {packageJson:packageJson,packagePath:packagePath,packageDirectory:packageDirectory};
        packageDirectories.push({pkgDir:packageDirectory,name:packageJson.name})
    }
    await updateDependencies(packageState);
    await updateTemplateDependenciesPackage(packageState);
    await publishPackages(packageDirectories,process.argv.length === 2,tag)
}

init()
