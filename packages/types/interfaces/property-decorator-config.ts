
import { DecoratorParams } from "./decorator-params";
import { ModelConfig } from "./model-config";
import { PropConfig } from "./prop-config";

export interface PropertyDecoratorConfig{
    decoratorParams:DecoratorParams;
    validatorConfig?:any;
    propConfig?:PropConfig;
    modelConfig?:ModelConfig;
    sanitizerConfig?:{
        name:string;
        config:any,
        sanitizer:Function
    }
}