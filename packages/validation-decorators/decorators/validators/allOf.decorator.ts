import { ValidatorNames } from "../../const/validator-names";
import { ArrayConfig } from "../../interfaces/validator-config/array-config";
import { allOfValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function allOf(config?:ArrayConfig) {
    return baseDecoratorFunction(ValidatorNames.allOf, config|| {},allOfValidator)    
}
