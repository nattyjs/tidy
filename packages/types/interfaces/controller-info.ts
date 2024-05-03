import { ActionInfo } from "./action-info";
import { RouteInfo } from "./route-info";

export interface ControllerInfo {
    route:RouteInfo;
    actions:{[key:string]:ActionInfo[]};
}