import { ValidatorNames } from "../const/validator-names";
import { ApplicationUtil } from "../functions/validators/application-util";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function primeNumberValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
  function isPrime(value) {
    let isPrimeNumber = value != 1;
    for (var i = 2; i < value; i++) {
      if (value % i == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    return isPrimeNumber;
  }
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!ApplicationUtil.isNumeric(control.value) || !isPrime(control.value))
        return ValidationMessage.toJson(ValidatorNames.primeNumber, config, [control.value]);
    }
    return ValidationMessage.null();
  }
