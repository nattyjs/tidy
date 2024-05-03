import { DecoratorInfo } from "./decorator-info";
import { MethodInfo } from "./method-info";
import { TypeInfo } from "./type-info";

export interface ClassTypeInfo extends TypeInfo{
    filePath?:string;
    constructorParameters?:TypeInfo[];
    methods?:MethodInfo[];
    properties?:TypeInfo[];
    route?:DecoratorInfo;
}