import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  clean:false,
  rollup: {
    inlineDependencies: true,
    emitCJS:true
  },
  entries: [
    './index'
  ],
  externals:['@nattyjs/validation-decorators']
  
})
