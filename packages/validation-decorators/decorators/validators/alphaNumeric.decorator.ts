import { baseDecoratorFunction } from "./base-decorator.function"
import { ValidatorNames } from "../../const/validator-names";
import { AlphaConfig } from "../../interfaces/validator-config/alpha-config";
import { alphaNumericValidator } from "../../validators";

export function alphaNumeric(config?: AlphaConfig) {
    return baseDecoratorFunction(ValidatorNames.alphaNumeric, config|| {},alphaNumericValidator)    
}
