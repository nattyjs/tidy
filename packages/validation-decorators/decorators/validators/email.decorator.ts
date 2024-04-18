import { ValidatorNames } from "../../const/validator-names";
import { EmailConfig } from "../../interfaces/validator-config/email-config";
import { emailValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function email(config?:EmailConfig) {
    return baseDecoratorFunction(ValidatorNames.email, config|| {},emailValidator)    
}
