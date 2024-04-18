import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegExRule } from "../functions/validators/regex-rules";
import { RegexValidator } from "../functions/validators/regex-validator";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function gridValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
        let config = getConfigObject(configModel);
        if (ValidatorValueChecker.pass(control, config)) {
            let controlValue = control.value.toUpperCase();
            var isValid = RegexValidator.isValid(controlValue, RegExRule.grid)
            if (isValid) {
                controlValue = controlValue.replace(/\s/g, '').replace(/-/g, '');
                if ('GRID:' === controlValue.substr(0, 5)) {
                    controlValue = controlValue.substr(5);
                }
                let alphaNums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var alphaNumLength = alphaNums.length,
                    length = controlValue.length,
                    check = Math.floor(alphaNumLength / 2);
                for (var i = 0; i < length; i++) {
                    check = (((check || alphaNumLength) * 2) % (alphaNumLength + 1) + alphaNums.indexOf(controlValue.charAt(i))) % alphaNumLength;
                }
                isValid = (check === 1);
            }
            if (!isValid)
                return ValidationMessage.toJson(ValidatorNames.grid, config, [control.value]);
        }
        return ValidationMessage.null();
    }