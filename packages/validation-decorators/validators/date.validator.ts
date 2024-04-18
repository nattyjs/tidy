import { ValidatorNames } from "../const/validator-names";
import { validateDate } from "../functions/validators/date-checker";
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidatorFn } from "../types/validator-fn";

export function dateValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
    return validateDate(control, configModel, ValidatorNames.date);
}
