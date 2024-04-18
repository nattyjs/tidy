import { ValidatorNames } from "../../const/validator-names";
import { RelationalOperatorConfig } from "../../interfaces/validator-config/relation-operator-config";
import { lessThanEqualToValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function lessThanEqualTo(config:RelationalOperatorConfig) {
    return baseDecoratorFunction(ValidatorNames.lessThanEqualTo, config|| {},lessThanEqualToValidator)    
}
