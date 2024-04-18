import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { notEmptyValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function notEmpty(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.notEmpty, config|| {},notEmptyValidator)    
}
