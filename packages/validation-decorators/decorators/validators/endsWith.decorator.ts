import { ValidatorNames } from "../../const/validator-names";
import { StringValueConfig } from "../../interfaces/validator-config/string-value-config";
import { endsWithValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function endsWith(config: StringValueConfig) {
    return baseDecoratorFunction(ValidatorNames.endsWith, config|| {},endsWithValidator)    
}