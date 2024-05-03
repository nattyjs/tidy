import {  PropConfig } from "@nattyjs/types"
export type ValidatorInfo ={[key:string]:any} 
export type PropertyInfo = {
    propConfig?:PropConfig;
    validators:{[key:string]:any};
    sanitizers:{[key:string]:any};
    }
export type EntityInfo = {
    target:any,
    properties:{[key:string]:PropertyInfo},
}
