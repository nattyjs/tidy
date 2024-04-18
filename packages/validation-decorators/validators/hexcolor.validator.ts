import { ValidatorNames } from "../const/validator-names"
import { RegExRule } from "../functions/validators/regex-rules"
import { regexValidation } from "../functions/validators/regex-validation"
import { HexColorConfig } from "../interfaces/validator-config/hex-color-config"
import { ValidatorParams } from "../interfaces/validator-params"
import { ValidatorFn } from "../types/validator-fn"

export function hexColorValidator(configModel: HexColorConfig,control:ValidatorParams): ValidatorFn {
        return regexValidation(configModel, control, RegExRule.strictHexColor, ValidatorNames.hexColor)
}
