export function callValidator(config:any,validator:any){
    return{
        config:config,
        validator:(params:any)=>{
            const result =  validator(config||{},params);
            return result;``
        }
    } 
}