import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegexValidator } from "../functions/validators/regex-validator";
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { Linq } from "../statics/linq";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function notEmptyValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (Linq.execute(config,control)) {
      if (!RegexValidator.isNotBlank(control.value,true)) {
        return ValidationMessage.toJson(ValidatorNames.notEmpty, config, [])
      }
    }
    return ValidationMessage.null();
  }
