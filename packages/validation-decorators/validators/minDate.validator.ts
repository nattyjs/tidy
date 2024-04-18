import { ValidatorNames } from "../const/validator-names";
import { dateChecker } from "../functions/validators/date-checker";
import { MinDateConfig } from "../interfaces/validator-config/min-date-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidatorFn } from "../types/validator-fn";

export function minDateValidator(configModel: MinDateConfig,control:ValidatorParams): ValidatorFn {
    return dateChecker(control, configModel, ValidatorNames.minDate);
}
