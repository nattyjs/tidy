import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { NumberConfig } from "../interfaces/validator-config/number-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function minNumberValidator(configModel: NumberConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(parseFloat(control.value) >= config.value))
        return ValidationMessage.toJson(ValidatorNames.minNumber, config, [control.value, config.value])
    }
    return ValidationMessage.null();
  }
