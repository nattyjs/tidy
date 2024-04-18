import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegexValidator } from "../functions/validators/regex-validator";
import { PasswordConfig } from "../interfaces/validator-config/password-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function passwordValidator(configModel: PasswordConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    let controlValue = control.value;
    if (RegexValidator.isNotBlank(controlValue)) {
      let validation = RegexValidator.isValidPassword(config.validation, controlValue);
      if (!validation.isValid)
        return ValidationMessage.toJson(ValidatorNames.password, config, [controlValue])
    }
    return ValidationMessage.null();

  }
