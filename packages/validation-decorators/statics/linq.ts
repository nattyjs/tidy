import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";

export class Linq{
    static execute(config:BaseValidatorConfig,params:ValidatorParams){
        if(config.conditionalExpression){
            return config.conditionalExpression.bind(params.current).call(params.current,params.current,params.root)
        }
        return true;
    }
}