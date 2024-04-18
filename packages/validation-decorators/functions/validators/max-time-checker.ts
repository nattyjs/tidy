import { OPERATORS } from "../../const/operators.const";
import { ValidatorNames } from "../../const/validator-names";
import { ValidatorParams } from "../../interfaces/validator-params";
import { Linq } from "../../statics/linq";
import { ValidationMessage } from "../../statics/validation-message";
import { getConfigObject } from "./get-config-object";
import { RegExRule } from "./regex-rules";
import { RegexValidator } from "./regex-validator";

function runCondition(leftValue: number, rightValue: number, operator: string): boolean {
    let result: boolean = false;
    switch (operator) {
        case OPERATORS.lessThan:
        case OPERATORS.greaterThan:
            result = leftValue > rightValue;
            break;
        case OPERATORS.lessThanEqualTo:
        case OPERATORS.greaterThanEqualTo:
            result = leftValue >= rightValue;
            break;
    }
    return result;
}

function isValid(control: ValidatorParams, config: any) {
    return config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
}

function getTime(value: any) {
    let splitTime = (value) ? value.split(':') : [];
    return new Date(1970, 0, 1, splitTime[0] ? splitTime[0] : 0, splitTime[1] ? splitTime[1] : 0, splitTime[2] ? splitTime[2] : 0).getTime();
}

export function timeChecker(control: ValidatorParams,config:any,operationType:string): { [key: string]: any } {
    config = getConfigObject(config);
      if (Linq.execute(config,control)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (isValid(control,config)) {
                let crossControlValue = config.fieldName ? getTime(control.current[config.fieldName]) : getTime(config.value);  
                let currentControlValue = getTime(control.value);
                let isValid = operationType == ValidatorNames.minTime ? runCondition(currentControlValue, crossControlValue, config.operator || OPERATORS.greaterThanEqualTo) : runCondition(crossControlValue, currentControlValue, config.operator || OPERATORS.lessThanEqualTo)
                let additionalValue={[operationType == ValidatorNames.minTime ? "min":"max"]:crossControlValue}
                if (!isValid)
                    return ValidationMessage.toJson(operationType, config, [control.value])
            } else
                return ValidationMessage.toJson(operationType, config, [control.value])
        }
    }
    return ValidationMessage.null();
}