import { ValidatorNames } from "../../const/validator-names";
import { RequiredConfig } from "../../interfaces/validator-config/required-config";
import { requiredTrueValidator } from "../../validators/required-true.validator";
import { baseDecoratorFunction } from "./base-decorator.function";

export function requiredTrue(config?:RequiredConfig) {
    return baseDecoratorFunction(ValidatorNames.requiredTrue, config|| {},requiredTrueValidator)    
}
