import { ValidatorNames } from "../../const/validator-names";
import { ArrayConfig } from "../../interfaces/validator-config/array-config";
import { noneOfValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function noneOf(config?:ArrayConfig) {
    return baseDecoratorFunction(ValidatorNames.noneOf, config|| {},noneOfValidator)    
}
