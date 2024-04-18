import { PasswordValidation, PasswordValidationMessage } from "./password-validation-config";

export interface PasswordConfig {
    validation?: PasswordValidation;
    conditionalExpression?: string | Function;
    message?: PasswordValidationMessage | string;
    messageKey?: PasswordValidationMessage | string;
}
