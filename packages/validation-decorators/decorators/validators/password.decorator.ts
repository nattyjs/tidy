import { ValidatorNames } from "../../const/validator-names";
import { PasswordConfig } from "../../interfaces/validator-config/password-config";
import { passwordValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function password(config:PasswordConfig) {
    return baseDecoratorFunction(ValidatorNames.password, config|| {},passwordValidator)    
}

