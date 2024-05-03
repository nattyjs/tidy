import { Cookie } from "./cookie";

export interface HttpResponseInit {

    body?: any;

    status?: number;

    headers?: HeadersInit;

    cookies?: Cookie[];

    enableContentNegotiation?: boolean;
}