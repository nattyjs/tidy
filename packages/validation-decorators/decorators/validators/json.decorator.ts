import { ValidatorNames } from "../../const/validator-names";
import { DefaultConfig } from "../../interfaces/validator-config/default-config";
import { jsonValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function json(config?:DefaultConfig) {
    return baseDecoratorFunction(ValidatorNames.json, config|| {},jsonValidator)    
}

