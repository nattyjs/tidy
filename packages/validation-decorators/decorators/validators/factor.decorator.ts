import { ValidatorNames } from "../../const/validator-names";
import { FactorConfig } from "../../interfaces/validator-config/factor-config";
import { factorValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function factor(config?:FactorConfig) {
    return baseDecoratorFunction(ValidatorNames.factor, config|| {},factorValidator)    
}

