import { DecoratorInfo } from "./decorator-info";
import { TypeInfo } from "./type-info";
export interface ParameterInfo{
    parameters:TypeInfo[];
    returnType:string;
    documentation:string;
}
export interface MethodInfo extends TypeInfo{
    parameters?:TypeInfo[];
    returnType?:string;
    route?:DecoratorInfo;
}