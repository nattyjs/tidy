
import { DecoratorParams } from "./decorator-params";
import { PropConfig } from "./prop-config";

export interface PropertyDecoratorConfig{
    decoratorParams:DecoratorParams;
    validatorConfig?:any;
    propConfig?:PropConfig;
    sanitizerConfig?:{
        name:string;
        config:any,
        sanitizer:Function
    }
}