import { ValidatorNames } from "../../const/validator-names";
import { ContainsConfig } from "../../interfaces/validator-config/contains-config";
import { containsValidator } from "../../validators/contains.validator";
import { baseDecoratorFunction } from "./base-decorator.function";

export function contains(config:ContainsConfig) {
    return baseDecoratorFunction(ValidatorNames.contains, config|| {},containsValidator)    
}
