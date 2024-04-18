import { ValidatorNames } from "../const/validator-names";
import { IpVersion } from "../enums/ip-version";
import { getConfigObject } from "../functions/validators/get-config-object";
import { checkIpV4, checkIpV6 } from "../functions/validators/ip-checker";
import { RegExRule } from "../functions/validators/regex-rules";
import { RegexValidator } from "../functions/validators/regex-validator";
import { ValidatorValueChecker } from "../functions/validators/validator-value--checker";
import { IpConfig } from "../interfaces/validator-config/ip-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function ipValidator(configModel: IpConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (ValidatorValueChecker.pass(control, config)) {
      let values: string[] = config.isCidr ? control.value.split('/') : [control.value];
      var isValid = (config.version == IpVersion.V4) ?
        checkIpV4(values[0]) :
        (config.version == IpVersion.V6) ?
          checkIpV6(values[0]) :
          (checkIpV4(values[0]) || checkIpV6(values[0]))
      if (config.isCidr && isValid) {
        isValid = (values.length > 1) ?
          config.version == IpVersion.V4 ?
            RegexValidator.isValid(values[1], RegExRule.cidrV4) :
            config.version == IpVersion.V6 ?
              RegexValidator.isValid(values[1], RegExRule.cidrV6) :
              (RegexValidator.isValid(values[1], RegExRule.cidrV4) || RegexValidator.isValid(values[1], RegExRule.cidrV6)) :
          false;
      }
      if (!isValid)
        return ValidationMessage.toJson(ValidatorNames.ip, config, [control.value]);
    }
    return ValidationMessage.null();
  }
