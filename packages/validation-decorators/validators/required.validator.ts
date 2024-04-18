import { ValidatorNames } from "../const/validator-names";
import { RequiredConfig } from "../interfaces/validator-config/required-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { Linq } from "../statics/linq";
import { Utils } from "../statics/utils";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function requiredValidator(config:RequiredConfig,params:ValidatorParams):ValidatorFn{
    if(Linq.execute(config,params))
    if(!Utils.isNotBlank(params.value))
        return ValidationMessage.toJson(ValidatorNames.required,config,[])
    return ValidationMessage.null();
}