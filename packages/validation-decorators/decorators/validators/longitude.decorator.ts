import { baseDecoratorFunction } from "./base-decorator.function"
import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { longitudeValidator } from "../../validators";

export function longitude(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.longitude, config|| {},longitudeValidator)    
}
