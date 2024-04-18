import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { cusipValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function cusip(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.cusip, config|| {},cusipValidator)    
}