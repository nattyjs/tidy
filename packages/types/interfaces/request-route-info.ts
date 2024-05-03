import { MethodInfo } from "./method-info";

export interface RequestRouteInfo{
    path:string;
    methodInfo:MethodInfo;
    controller:any;
    parameters:Array<{name:string,type:string}>;
    configuredRoutePath:string;
    queryParams:{[key:string]:any};
    params?:{[key:string]:any};
}