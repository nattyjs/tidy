import { ValidatorNames } from "../../const/validator-names";
import { MaxDateConfig } from "../../interfaces/validator-config/max-date-config";
import { maxDateValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function maxDate(config:MaxDateConfig) {
    return baseDecoratorFunction(ValidatorNames.maxDate, config|| {},maxDateValidator)    
}

