import { ValidatorNames } from "../../const/validator-names";
import { MessageConfig } from "../../interfaces/validator-config/message-config";
import { lowercaseValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function lowerCase(config?:MessageConfig) {
    return baseDecoratorFunction(ValidatorNames.lowercase, config|| {},lowercaseValidator)    
}
