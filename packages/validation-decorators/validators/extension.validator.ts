import { ValidatorNames } from "../const/validator-names";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegexValidator } from "../functions/validators/regex-validator";
import { ExtensionConfig } from "../interfaces/validator-config/extension-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { Linq } from "../statics/linq";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function extensionValidator(configModel: ExtensionConfig,control:ValidatorParams): ValidatorFn {
    let config = getConfigObject(configModel);
    if (Linq.execute( config,control)) {
      if (RegexValidator.isNotBlank(control.value)) {
        let testResult = true;
        let extension: string = '';
          let splitText = control.value.split(".");
          extension = splitText[splitText.length - 1];
          let result = config.extensions.filter(t => { return extension.toLowerCase() == t.toLowerCase() })[0];
          if (!result) 
            testResult = false;

        if (!testResult)
          return ValidationMessage.toJson(ValidatorNames.extension, config, [extension, config.extensions.join(",")]);
      }
    } return ValidationMessage.null();
  }
