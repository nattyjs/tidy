import { ValidatorNames } from "../const/validator-names"
import { RegExRule } from "../functions/validators/regex-rules"
import { regexValidation } from "../functions/validators/regex-validation"
import { BaseValidatorConfig } from "../interfaces/validator-config/base-validator-config"
import { ValidatorParams } from "../interfaces/validator-params"
import { ValidatorFn } from "../types/validator-fn"

export function latitudeValidator(configModel: BaseValidatorConfig,control:ValidatorParams): ValidatorFn {
      return regexValidation(configModel, control, RegExRule.lat, ValidatorNames.latitude)
}
