import { ValidatorNames } from "../const/validator-names"
import { relationalCheck } from "../functions/validators/relational-checker"
import { RelationalOperatorConfig } from "../interfaces/validator-config/relation-operator-config"
import { ValidatorParams } from "../interfaces/validator-params"
import { ValidatorFn } from "../types/validator-fn"

export function lessThanValidator(configModel: RelationalOperatorConfig,control:ValidatorParams): ValidatorFn {
    return relationalCheck(control, configModel, ValidatorNames.lessThan)
}
