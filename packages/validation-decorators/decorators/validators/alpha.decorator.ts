import { ValidatorNames } from "../../const/validator-names";
import { AlphaConfig } from "../../interfaces/validator-config/alpha-config";
import { alphaValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function alpha(config?:AlphaConfig) {
    return baseDecoratorFunction(ValidatorNames.alpha, config|| {},alphaValidator)    
}