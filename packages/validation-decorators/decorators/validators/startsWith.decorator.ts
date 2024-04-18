import { ValidatorNames } from "../../const/validator-names";
import { StringComparisonConfig } from "../../interfaces/validator-config/string-comparison-config";
import { startsWithValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function startsWith(config: StringComparisonConfig) {
    return baseDecoratorFunction(ValidatorNames.startsWith, config|| {},startsWithValidator)    
}
