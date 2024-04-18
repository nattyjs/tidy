import { ValidatorNames } from "../../const/validator-names";
import { MessageConfig } from "../../interfaces/validator-config/message-config";
import { uppercaseValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function upperCase(config?:MessageConfig) {
    return baseDecoratorFunction(ValidatorNames.uppercase, config|| {},uppercaseValidator)    
}
