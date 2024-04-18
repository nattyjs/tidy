import { AlphaConfig } from "../../interfaces/validator-config/alpha-config";
import { ValidatorParams } from "../../interfaces/validator-params";
import { ValidationMessage } from "../../statics/validation-message";
import { getConfigObject } from "./get-config-object";
import { RegexValidator } from "./regex-validator";
import { ValidatorValueChecker } from "./validator-value--checker";


export function alphaValidation(
    configModel: AlphaConfig,
    params: ValidatorParams,
    regExps: RegExp[],
    key: string
) {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(params, config)) {
        var isValid = (!config || !config.allowWhiteSpace) ?
            RegexValidator.isValid(params.value, regExps[0]) :
            RegexValidator.isValid(params.value, regExps[1]);
        if (!isValid)
            return ValidationMessage.toJson(key, config, [params.value]);
    }
    return ValidationMessage.null();
}


