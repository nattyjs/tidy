import { BaseValidatorConfig } from "../../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../../interfaces/validator-params";
import { ValidationMessage } from "../../statics/validation-message";
import { getConfigObject } from "./get-config-object";
import { RegexValidator } from "./regex-validator";
import { ValidatorValueChecker } from "./validator-value--checker";

export function regexValidation(
    configModel: BaseValidatorConfig,
    control: ValidatorParams,
    regExp: RegExp,
    key: string
) {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
        if (!RegexValidator.isValid(control.value, regExp))
            return ValidationMessage.toJson(key, config, [control.value]);
    }
    return ValidationMessage.null();
}