import { registerDecorator } from "../../functions/register-decorator";

export function baseSanitizerDecoratorFunction(sanitizerName:string,config:any,func:Function){
    return function (
        target: any,
        propertyKey: string,  parameterIndex?: any
    ) {
        registerDecorator({
            decoratorParams:{
                target:target,
                propertyKey:propertyKey,
                descriptor:parameterIndex
            },
            sanitizerConfig:{
                name:sanitizerName,
                config:config,
                sanitizer:func
            }
        })
    } 
}