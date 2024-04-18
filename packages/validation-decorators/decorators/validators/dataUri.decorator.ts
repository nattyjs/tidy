import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { dataUriValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function dataUri(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.dataUri, config|| {},dataUriValidator)    
}