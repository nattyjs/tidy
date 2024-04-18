import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegexValidator } from "../functions/validators/regex-validator";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { PatternConfig } from "../interfaces/validator-config/pattern-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function patternValidator(configModel: PatternConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      for (var pattern in config.expression)
        if (!(RegexValidator.isValid(control.value, config.expression[pattern])))
          return ValidationMessage.toJson(pattern, {...config}, [control.value])
    }
    return ValidationMessage.null();
  }
