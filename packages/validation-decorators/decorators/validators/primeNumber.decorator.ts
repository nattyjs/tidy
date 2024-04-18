import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { primeNumberValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function primeNumber(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.primeNumber, config|| {},primeNumberValidator)    
}
