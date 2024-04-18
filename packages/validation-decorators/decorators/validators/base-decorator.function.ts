import { registerDecorator } from "../../functions/register-decorator";
import { ValidatorParams } from "../../interfaces/validator-params";

export function baseDecoratorFunction(validatorName:string,config:any,validator:(config:any,params:ValidatorParams)=>null| {[key:string]:any}){
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
            validatorConfig:{
                name:validatorName,
                config:config,
                validator:validator
            }
        })
    } 
}