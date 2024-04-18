import { ValidatorNames } from "../const/validator-names";
import { dateChecker } from "../functions/validators/date-checker";
import { MaxDateConfig } from "../interfaces/validator-config/max-date-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidatorFn } from "../types/validator-fn";

export function maxDateValidator(configModel: MaxDateConfig,control:ValidatorParams): ValidatorFn {
    return dateChecker(control, configModel, ValidatorNames.maxDate);
  }