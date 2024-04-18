import { ValidatorNames } from "../../const/validator-names"
import { RequiredConfig } from "../../interfaces/validator-config/required-config"
import { requiredValidator } from "../../validators/required.validator"
import { baseDecoratorFunction } from "./base-decorator.function"

export function required(config?:RequiredConfig) {
    return baseDecoratorFunction(ValidatorNames.required, config|| {},requiredValidator)    
}
