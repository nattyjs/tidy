import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RequiredConfig } from "../interfaces/validator-config/required-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { Linq } from "../statics/linq";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function requiredTrueValidator(configModel: RequiredConfig,control:ValidatorParams): ValidatorFn {
        let config = getConfigObject(configModel);
        if (Linq.execute( config,control)) {
            if (control.value !== true) {
                return ValidationMessage.toJson(ValidatorNames.requiredTrue, config, [])
            }
        }
        return ValidationMessage.null();
    }
