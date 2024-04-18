import { ValidatorNames } from "../const/validator-names"
import { RegExRule } from "../functions/validators/regex-rules"
import { regexValidation } from "../functions/validators/regex-validation"
import { DefaultConfig } from "../interfaces/validator-config/default-config"
import { ValidatorParams } from "../interfaces/validator-params"
import { ValidatorFn } from "../types/validator-fn"

export function urlValidator(configModel: DefaultConfig,control:ValidatorParams): ValidatorFn {
        return regexValidation(configModel, control, RegExRule.url, ValidatorNames.url)
}
