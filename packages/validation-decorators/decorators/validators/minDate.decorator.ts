import { ValidatorNames } from "../../const/validator-names";
import { MinDateConfig } from "../../interfaces/validator-config/min-date-config";
import { minDateValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function minDate(config:MinDateConfig) {
    return baseDecoratorFunction(ValidatorNames.minDate, config|| {},minDateValidator)    
}

