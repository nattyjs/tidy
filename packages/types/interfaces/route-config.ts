import { MethodInfo } from "./method-info";
import { TypeInfo } from "./type-info";

export interface RouteConfig{
    controller:Function,
    parameters:Array<{name:string,type:string}>,
    get:{[key:string]:{
        name:string,
        parameters:Array<{name:string,type:string}>,
        returnType:string
    }}
    post:{[key:string]:{
        name:string,
        parameters:Array<{name:string,type:string}>,
        returnType:string
    }}
    put:{[key:string]:{
        name:string,
        parameters:Array<{name:string,type:string}>,
        returnType:string
    }}
    delete:{[key:string]:{
        name:string,
        parameters:Array<{name:string,type:string}>,
        returnType:string
    }}
}