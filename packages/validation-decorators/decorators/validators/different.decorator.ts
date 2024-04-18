import { ValidatorNames } from "../../const/validator-names";
import { DifferentConfig } from "../../interfaces/validator-config/different-config";
import { differentValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";


export function different(config:DifferentConfig) {
    return baseDecoratorFunction(ValidatorNames.different, config|| {},differentValidator)    
}
