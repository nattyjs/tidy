import { ValidatorNames } from "../../const/validator-names";
import { ValidatorParams } from "../../interfaces/validator-params";
import { Linq } from "../../statics/linq";
import { ValidationMessage } from "../../statics/validation-message";
import { getConfigObject } from "./get-config-object";
import { RegexValidator } from "./regex-validator";

export function relationalCheck(control: ValidatorParams, config: any, relationalOperatorName: string) {
    config = getConfigObject(config);
    const matchControlValue = (config.fieldName) ? control.current[config.fieldName] : config.value !== undefined ? config.value : '';
    if (Linq.execute(config,control)) {
        if (isValid(control, matchControlValue, relationalOperatorName) === false)
            return ValidationMessage.toJson(relationalOperatorName, config, [control.value, matchControlValue]);
    }
    return ValidationMessage.null();
}

function isValid(control, matchControlValue, relationalOperatorName) {
    if (RegexValidator.isNotBlank(control.value) && RegexValidator.isNotBlank(matchControlValue)) {
        let isValid = false;
        switch (relationalOperatorName) {
            case ValidatorNames.greaterThan:
                isValid = parseFloat(control.value) > parseFloat(matchControlValue);
                break;
            case ValidatorNames.lessThan:
                isValid = parseFloat(control.value) < parseFloat(matchControlValue)
                break;
            case ValidatorNames.greaterThanEqualTo:
                isValid = parseFloat(control.value) >= parseFloat(matchControlValue)
                break;
            case ValidatorNames.lessThanEqualTo:
                isValid = parseFloat(control.value) <= parseFloat(matchControlValue)
                break;
        }
        return isValid;
    }
    return null;
}
