export interface ValidatorConfig{
    name:string;
    validator:(config:any,value:any)=>{[key:string]:any} | null;
    config:any;
}