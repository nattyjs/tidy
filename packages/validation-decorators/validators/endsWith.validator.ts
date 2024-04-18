import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { DefaultConfig } from "../interfaces/validator-config/default-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function endsWithValidator(configModel: DefaultConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      var endString = String(control.value).substr(control.value.length - config.value.length, config.value.length);
      if (endString != config.value)
        return ValidationMessage.toJson(ValidatorNames.endsWith, config, [control.value, config.value]);
    }
    return ValidationMessage.null();
  }
