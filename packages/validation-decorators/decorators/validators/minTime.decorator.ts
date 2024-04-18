import { ValidatorNames } from "../../const/validator-names";
import { MinTimeConfig } from "../../interfaces/validator-config/time-config";
import { minTimeValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function minTime(config:MinTimeConfig) {
    return baseDecoratorFunction(ValidatorNames.minTime, config|| {},minTimeValidator)    
}

