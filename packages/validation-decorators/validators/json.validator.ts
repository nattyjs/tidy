import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { DefaultConfig } from "../interfaces/validator-config/default-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function jsonValidator(configModel: DefaultConfig,control:ValidatorParams): ValidatorFn {
  function process(value) {
    var result: boolean = false;
    try {
      var json = JSON.parse(value);
      result = !!json && typeof json === 'object'
    }
    catch (ex) {
      result = false;
    }
    return result;
  }

    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      if (process(control.value))
        return ValidationMessage.toJson(ValidatorNames.json, config, [control.value]);
    }
    return ValidationMessage.null();
  }
