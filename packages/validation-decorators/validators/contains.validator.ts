import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { DefaultConfig } from "../interfaces/validator-config/default-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function containsValidator(configModel: DefaultConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      if (control.value.indexOf(config.value) == -1)
        return ValidationMessage.toJson(ValidatorNames.contains, config, [control.value, config.value]);
    }
    return ValidationMessage.null();
}
