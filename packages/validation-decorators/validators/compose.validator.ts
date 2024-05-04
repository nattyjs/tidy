import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { ComposeConfig } from "../interfaces/validator-config/compose-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

  export function composeValidator(configModel: ComposeConfig,control:ValidatorParams): ValidatorFn {
      let config = getConfigObject(configModel);
      if (ValidatorValueChecker.pass(control, config,true)) {
        if (config.validators) {
          let result = undefined;
          for (let validator of config.validators) {
            result = validator.validator(control);
            if (result)
              break;
            }
            if (result)
                return (config.messageKey || config.message) ? ValidationMessage.toJson(config.messageKey || ValidatorNames.compose, config, [control.value]) : result;
        }
      } return ValidationMessage.null();
    }
  