import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegexValidator } from "../functions/validators/regex-validator";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { CompareConfig } from "../interfaces/validator-config/compare-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

  export function compareValidator(configModel: CompareConfig,control:ValidatorParams): ValidatorFn {
      let config = getConfigObject(configModel);
      if (ValidatorValueChecker.pass(control, config)) {
        const compareControlValue = control.current[config.fieldName];
        if (RegexValidator.isNotBlank(compareControlValue)) {
          if (!(compareControlValue === control.value))
            return ValidationMessage.toJson(ValidatorNames.compare, config, [control.value, compareControlValue]);
      
        }
      } return ValidationMessage.null();
    }
  