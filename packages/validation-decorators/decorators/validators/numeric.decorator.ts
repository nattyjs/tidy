import { ValidatorNames } from "../../const/validator-names";
import { NumericConfig } from "../../interfaces/validator-config/numeric-config";
import { numericValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function numeric(config?:NumericConfig) {
    return baseDecoratorFunction(ValidatorNames.numeric, config|| {},numericValidator)    
}