import { ValidatorNames } from "../../const/validator-names";
import { NumberConfig } from "../../interfaces/validator-config/number-config";
import { maxNumberValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function maxNumber(config:NumberConfig) {
    return baseDecoratorFunction(ValidatorNames.maxNumber, config|| {},maxNumberValidator)    
}

