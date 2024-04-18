import { ValidatorNames } from "../const/validator-names";
import { ApplicationUtil } from "../functions/validators/application-util";
import { getConfigObject } from "../functions/validators/get-config-object";
import { ArrayConfig } from "../interfaces/validator-config/array-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { Linq } from "../statics/linq";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function noneOfValidator(configModel: ArrayConfig,control:ValidatorParams): ValidatorFn {
        let config = getConfigObject(configModel);
        if (Linq.execute(config,control)) {
            var testResult = false; 
            for (let value of config.matchValues) {
                let matchValue = ApplicationUtil.lowerCaseWithTrim(value);
                testResult = Array.isArray(control.value) ? control.value.some((y) => ApplicationUtil.lowerCaseWithTrim(y) === matchValue) : ApplicationUtil.lowerCaseWithTrim(control.value) === matchValue;
                if (testResult)
                    break;
            }
            if (testResult)
                return ValidationMessage.toJson(ValidatorNames.noneOf, config, [control.value]);
        }
        return ValidationMessage.null();
    }