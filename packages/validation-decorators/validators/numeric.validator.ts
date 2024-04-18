import { ValidatorNames } from "../const/validator-names";
import { ApplicationUtil } from "../functions/validators/application-util";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegexValidator } from "../functions/validators/regex-validator";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { NumericConfig } from "../interfaces/validator-config/numeric-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function numericValidator(configModel: NumericConfig,control:ValidatorParams): ValidatorFn {
        let config = getConfigObject(configModel);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!RegexValidator.isValid(control.value, ApplicationUtil.numericValidation(config.allowDecimal, config.acceptValue)))
                return ValidationMessage.toJson(ValidatorNames.numeric, config, [control.value]);
        }
        return ValidationMessage.null();
    }
