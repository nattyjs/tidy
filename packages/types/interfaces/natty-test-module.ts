import { HttpRequestInit } from "./http-request-init";

export interface NattyTestModule{
    onRequest(request:HttpRequestInit):Promise<any>
}