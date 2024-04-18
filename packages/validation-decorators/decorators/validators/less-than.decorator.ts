import { baseDecoratorFunction } from "./base-decorator.function"
import { ValidatorNames } from "../../const/validator-names";
import { RelationalOperatorConfig } from "../../interfaces/validator-config/relation-operator-config";
import { lessThanValidator } from "../../validators";

export function lessThan(config:RelationalOperatorConfig) {
    return baseDecoratorFunction(ValidatorNames.lessThan, config|| {},lessThanValidator)    
}

