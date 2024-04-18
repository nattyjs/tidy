import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegExRule } from "../functions/validators/regex-rules";
import { RegexValidator } from "../functions/validators/regex-validator";
import { FactorConfig } from "../interfaces/validator-config/factor-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { Linq } from "../statics/linq";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function factorValidator(configModel: FactorConfig,control:ValidatorParams): ValidatorFn {

  function positiveFactors(dividend, value) {
    let isPositive = false;
    for (var index = 1; index <= Math.floor(Math.sqrt(dividend)); index += 1) {
      if (dividend % index === 0) {
        if (index == value)
          isPositive = true;
        if (dividend / index !== index)
          if ((dividend / index) == value)
            isPositive = true;
        if (isPositive)
          break;
      }
    }
    return isPositive;
  }

    let config = getConfigObject(configModel);
    const dividend = config.fieldName ? control.current[config.fieldName]: config.dividend;
    if (Linq.execute(config,control)) {
      if (RegexValidator.isNotBlank(control.value) && dividend > 0) {
        if (!RegexValidator.isValid(control.value, RegExRule.onlyDigit) || !positiveFactors(dividend, parseInt(control.value)))
          return ValidationMessage.toJson(ValidatorNames.factor, config, [control.value]);
      }
    }
    return ValidationMessage.null();
  }