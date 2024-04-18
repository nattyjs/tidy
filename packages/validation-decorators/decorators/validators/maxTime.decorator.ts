import { ValidatorNames } from "../../const/validator-names";
import { MaxTimeConfig } from "../../interfaces/validator-config/time-config";
import { maxTimeValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function maxTime(config:MaxTimeConfig) {
    return baseDecoratorFunction(ValidatorNames.maxTime, config|| {},maxTimeValidator)    
}

