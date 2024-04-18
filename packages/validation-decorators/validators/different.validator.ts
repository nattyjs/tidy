import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { DifferentConfig } from "../interfaces/validator-config/different-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function differentValidator(configModel: DifferentConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      const differentControlValue = control.current[config.fieldName];
      if (!(differentControlValue != control.value))
        return ValidationMessage.toJson(ValidatorNames.different, config, [control.value, differentControlValue]);
    }
    return ValidationMessage.null();
  }