import { ValidatorNames } from "../const/validator-names"
import { RegExRule } from "../functions/validators/regex-rules"
import { regexValidation } from "../functions/validators/regex-validation"
import { EmailConfig } from "../interfaces/validator-config/email-config"
import { ValidatorParams } from "../interfaces/validator-params"
import { ValidatorFn } from "../types/validator-fn"

export function emailValidator(configModel: EmailConfig,control:ValidatorParams): ValidatorFn {
        return regexValidation(configModel, control, RegExRule.basicEmail, ValidatorNames.email)
}
