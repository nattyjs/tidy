import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { oddValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function odd(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.odd, config|| {},oddValidator)    
}
