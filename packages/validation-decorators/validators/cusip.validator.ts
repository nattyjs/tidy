import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegExRule } from "../functions/validators/regex-rules";
import { RegexValidator } from "../functions/validators/regex-validator";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function cusipValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
        var controlValue = control.value.toUpperCase();
        let isValid = RegexValidator.isValid(controlValue, RegExRule.cusip)
        if (isValid) {
         
            let numericValues = controlValue.split("").map((value) => {
                var charCode = value.charCodeAt(0);
                return charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ? charCode - "A".charCodeAt(0) + 10 : value
            });
            let totalCount = 0;
            for (var i = 0; i < numericValues.length - 1; i++) {
                var numericValue = parseInt(numericValues[i], 10);
                if (i % 2 !== 0) {
                    numericValue *= 2;
                }
                if (numericValue > 9) {
                    numericValue -= 9;
                }
                totalCount += numericValue;
            }

            totalCount = (10 - (totalCount % 10)) % 10;
            isValid = totalCount == numericValues[numericValues.length - 1];
        }      
      if (!isValid)
        return ValidationMessage.toJson(ValidatorNames.cusip, config, [control.value]);
    }
    return ValidationMessage.null();
}
