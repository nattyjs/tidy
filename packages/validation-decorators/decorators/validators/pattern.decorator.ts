import { ValidatorNames } from "../../const/validator-names";
import { PatternConfig } from "../../interfaces/validator-config/pattern-config";
import { patternValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function pattern(config:PatternConfig) {
    return baseDecoratorFunction(ValidatorNames.pattern, config|| {},patternValidator)    
}

