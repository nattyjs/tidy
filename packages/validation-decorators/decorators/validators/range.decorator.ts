import { ValidatorNames } from "../../const/validator-names";
import { RangeConfig } from "../../interfaces/validator-config/range-config";
import { rangeValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function range(config:RangeConfig) {
    return baseDecoratorFunction(ValidatorNames.range, config|| {},rangeValidator)    
}
