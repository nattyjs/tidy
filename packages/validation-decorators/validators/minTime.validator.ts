import { ValidatorNames } from "../const/validator-names";
import { timeChecker } from "../functions/validators/max-time-checker";
import { MinTimeConfig } from "../interfaces/validator-config/time-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidatorFn } from "../types/validator-fn";

export function minTimeValidator(configModel: MinTimeConfig,control:ValidatorParams): ValidatorFn {
      return timeChecker(control, configModel, ValidatorNames.minTime);
}
