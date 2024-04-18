import { ValidatorNames } from "../../const/validator-names";
import { DigitConfig } from "../../interfaces/validator-config/digit-config";
import { digitValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function digit(config?:DigitConfig) {
    return baseDecoratorFunction(ValidatorNames.digit, config|| {},digitValidator)    
}
