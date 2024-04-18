import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { ArrayConfig } from "../interfaces/validator-config/array-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function oneOfValidator(configModel: ArrayConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.passArrayValue(control, config)) {
      var testResult = false;
      for (let value of config.matchValues) {
        testResult = control.value.some((y) => y == value);
        if (testResult)
          break;
      }
      if (!testResult)
        return ValidationMessage.toJson(ValidatorNames.oneOf, config, [control.value]);
    }
    return ValidationMessage.null();
  }