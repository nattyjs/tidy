import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { DefaultConfig } from "../interfaces/validator-config/default-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function startsWithValidator(configModel: DefaultConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      var startString = String(control.value).substr(0, config.value.length);
      if (startString != config.value)
        return ValidationMessage.toJson(ValidatorNames.startsWith, config, [control.value, config.value]);
    }
    return ValidationMessage.null();
  }
