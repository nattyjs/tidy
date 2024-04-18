import { OPERATORS } from "../../const/operators.const";
import { ValidatorNames } from "../../const/validator-names";
import { ValidatorParams } from "../../interfaces/validator-params";
import { Linq } from "../../statics/linq";
import { ValidationMessage } from "../../statics/validation-message";
import { DateProvider } from "./date-provider";
import { getConfigObject } from "./get-config-object";
import { RegexValidator } from "./regex-validator";

function runCondition(leftValue:Date,rightValue:Date,operator:string):boolean{
    let result:boolean  = false;
    switch(operator){
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

export function dateChecker(control: ValidatorParams,config:any,operationType:string): { [key: string]: any } | null {
    config = getConfigObject(config);
    var dateProvider = new DateProvider();
      if (Linq.execute(config,control)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (dateProvider.isDate(control.value) || dateProvider.isValid(control.value,config)) {
                let checkDate = dateProvider.getCompareDate(config,control);
                let currentControlValue = dateProvider.getDate(control.value);
                let isValid = operationType == ValidatorNames.minDate ? runCondition(currentControlValue,checkDate,config.operator || OPERATORS.greaterThanEqualTo): runCondition(checkDate,currentControlValue,config.operator || OPERATORS.lessThanEqualTo)
                if (!isValid)
                    return ValidationMessage.toJson(operationType, config, [control.value])
            } else
                return ValidationMessage.toJson(operationType, config, [control.value])
        }
    }
    return ValidationMessage.null();
}

export function validateDate(control: ValidatorParams,config:any,operationType:string): { [key: string]: any } | null {
    config = getConfigObject(config);
    var dateProvider = new DateProvider();
      if (Linq.execute(config,control)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (!dateProvider.isDate(control.value) && !dateProvider.isValid(control.value,config)) {
                return ValidationMessage.toJson(operationType, config, [control.value])
        }
    }
}
    return ValidationMessage.null();
}