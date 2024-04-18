import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { portValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function port(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.port, config|| {},portValidator)    
}
