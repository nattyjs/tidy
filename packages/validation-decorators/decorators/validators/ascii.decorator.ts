import { baseDecoratorFunction } from "./base-decorator.function"
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { ValidatorNames } from "../../const/validator-names";
import { asciiValidator } from "../../validators";

export function ascii(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.ascii, config|| {},asciiValidator)    
}