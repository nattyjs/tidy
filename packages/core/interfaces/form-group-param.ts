import { Type } from "./type";

export interface FormGroupParam{
    type?:Type<any>;
    validators:{[key:string]:{config:any,validator:Function} | [{config:any,validator:Function}]};
    parent?:any;
    root?:any;
}