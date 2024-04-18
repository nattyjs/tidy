import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function leapYearValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      var isValid = (control.value % 100 === 0) ? (control.value % 400 === 0) : (control.value % 4 === 0);
      if (!isValid)
        return ValidationMessage.toJson(ValidatorNames.leapYear, config, [control.value]);
    }
    return ValidationMessage.null();
  }
