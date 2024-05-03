import { HttpResponseInit } from "../http-response-init";

export interface IHttpResult{
    getResponse():HttpResponseInit;
}