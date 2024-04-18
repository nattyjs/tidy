import { ValidatorNames } from "../const/validator-names";
import { ApplicationUtil } from "../functions/validators/application-util";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function oddValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control,config)) {
      if (!(!(control.value % 2 == 0)) || !ApplicationUtil.isNumeric(control.value))
        return ValidationMessage.toJson(ValidatorNames.odd, config, [control.value]);
    }
    return ValidationMessage.null();
  }
