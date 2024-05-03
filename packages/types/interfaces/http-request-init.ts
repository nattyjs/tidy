import { HttpRequestBodyInfo } from "../types/http-request-body-info";
import { Cookie } from "./cookie";

export interface HttpRequestInit{
    method?: string;

    url?: string;

    pathName?:string;
    
    host?:string;

    body?: HttpRequestBodyInfo;

    cookies?:Cookie[];

    headers?: Headers;

    query?: Record<string, string>;

    params?: Record<string, string>;
}

export interface HttpRequestBodyInit {

    bytes?: Uint8Array;

    string?: string;

    json?:{[key:string]:any} | Array<{[key:string]:any}>
}