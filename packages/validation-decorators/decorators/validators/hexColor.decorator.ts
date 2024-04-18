import { ValidatorNames } from "../../const/validator-names";
import { MessageConfig } from "../../interfaces/validator-config/message-config";
import { hexColorValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function hexColor(config?:MessageConfig) {
    return baseDecoratorFunction(ValidatorNames.hexColor, config|| {},hexColorValidator)    
}
