import { ValidatorNames } from "../../const/validator-names";
import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { dateValidator} from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function date(config?:BaseValidatorConfig) {
    return baseDecoratorFunction(ValidatorNames.date, config|| {},dateValidator)    
}

