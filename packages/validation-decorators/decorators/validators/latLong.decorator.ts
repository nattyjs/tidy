import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { latLongValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function latLong(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.latLong, config|| {},latLongValidator)    
}
