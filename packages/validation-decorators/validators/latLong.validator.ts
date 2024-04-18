import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegExRule } from "../functions/validators/regex-rules";
import { RegexValidator } from "../functions/validators/regex-validator";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function latLongValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      let splitText = control.value.split(',')
      if (!(splitText.length > 1 && RegexValidator.isValid(splitText[0], RegExRule.lat) && RegexValidator.isValid(splitText[1], RegExRule.long)))
        return ValidationMessage.toJson(ValidatorNames.latLong, config, [control.value]);
    }
    return ValidationMessage.null();
  }