import { ValidatorNames } from "../../const/validator-names";
import { RelationalOperatorConfig } from "../../interfaces/validator-config/relation-operator-config";
import { greaterThanValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function greaterThan(config:RelationalOperatorConfig) {
    return baseDecoratorFunction(ValidatorNames.greaterThan, config|| {},greaterThanValidator)    
}
