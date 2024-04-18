import { ValidatorNames } from "../const/validator-names";
import { alphaValidation } from "../functions/validators/alpha-validation";
import { RegExRule } from "../functions/validators/regex-rules";
import { AlphaConfig } from "../interfaces/validator-config/alpha-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidatorFn } from "../types/validator-fn";

export function alphaValidator(configModel: AlphaConfig,params:ValidatorParams): ValidatorFn {
        return alphaValidation(configModel,params,[RegExRule.alpha, RegExRule.alphaWithSpace],ValidatorNames.alpha);
}
