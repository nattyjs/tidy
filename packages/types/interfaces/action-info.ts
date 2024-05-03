import { RouteInfo } from "./route-info";

export interface ActionInfo{
    route:RouteInfo;
    action:string;
    requestMethod?:string;
}