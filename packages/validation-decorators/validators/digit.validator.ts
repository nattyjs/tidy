import { ValidatorNames } from "../const/validator-names"
import { RegExRule } from "../functions/validators/regex-rules"
import { regexValidation } from "../functions/validators/regex-validation"
import { DigitConfig } from "../interfaces/validator-config/digit-config"
import { ValidatorParams } from "../interfaces/validator-params"
import { ValidatorFn } from "../types/validator-fn"

export function digitValidator(configModel: DigitConfig,control:ValidatorParams): ValidatorFn {
        return regexValidation(configModel, control, RegExRule.onlyDigit, ValidatorNames.digit)
}
