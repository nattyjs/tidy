import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { evenValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function even(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.even, config|| {},evenValidator)    
}
