import { ValidatorNames } from "../../const/validator-names";
import { ArrayConfig } from "../../interfaces/validator-config/array-config";
import { oneOfValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function oneOf(config?:ArrayConfig) {
    return baseDecoratorFunction(ValidatorNames.oneOf, config|| {},oneOfValidator)    
}