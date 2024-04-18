import { registerDecorator } from "../../functions/register-decorator";
import { PropConfig } from "../../interfaces/validator-config/prop-config";
export function prop(config?:PropConfig) {
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
            propConfig:config as any || {}
        })
    }   
}