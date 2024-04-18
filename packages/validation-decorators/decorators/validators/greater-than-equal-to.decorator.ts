import { ValidatorNames } from "../../const/validator-names";
import { RelationalOperatorConfig } from "../../interfaces/validator-config/relation-operator-config";
import { greaterThanEqualToValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function greaterThanEqualTo(config:RelationalOperatorConfig) {
    return baseDecoratorFunction(ValidatorNames.greaterThanEqualTo, config|| {},greaterThanEqualToValidator)    
}
