import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { MessageConfig } from "../interfaces/validator-config/message-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function uppercaseValidator(configModel?: MessageConfig,control?:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(control.value === control.value.toUpperCase()))
        return ValidationMessage.toJson(ValidatorNames.uppercase, config, [control.value])
    }
    return ValidationMessage.null();
  }
