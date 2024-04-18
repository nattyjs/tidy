import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { leapYearValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function leapYear(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.leapYear, config|| {},leapYearValidator)    
}
