import { ValidatorNames } from "../../const/validator-names";
import { NumberConfig } from "../../interfaces/validator-config/number-config";
import { maxLengthValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function maxLength(config:NumberConfig) {
    return baseDecoratorFunction(ValidatorNames.maxLength, config|| {},maxLengthValidator)    
}

