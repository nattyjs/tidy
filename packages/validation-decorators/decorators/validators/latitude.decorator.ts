import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { latitudeValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function latitude(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.latitude, config|| {},latitudeValidator)    
}
