import { HttpRequestBodyInit } from "./http-request-init";
import { RouteInfo } from "./route-info";

export interface IExceptionContext{
    error:any;
    request:HttpRequestBodyInit,
    routeInfo:RouteInfo;
}