import { ValidatorNames } from "../../const/validator-names";
import { NumberConfig } from "../../interfaces/validator-config/number-config";
import { minLengthValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function minLength(config:NumberConfig) {
    return baseDecoratorFunction(ValidatorNames.minLength, config|| {},minLengthValidator)    
}