import { ValidatorNames } from "../../const/validator-names";
import { NumberConfig } from "../../interfaces/validator-config/number-config";
import { minNumberValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function minNumber(config:NumberConfig) {
    return baseDecoratorFunction(ValidatorNames.minNumber, config|| {},minNumberValidator)    
}