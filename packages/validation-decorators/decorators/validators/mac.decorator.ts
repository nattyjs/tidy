import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { macValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function mac(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.mac, config|| {},macValidator)    
}
