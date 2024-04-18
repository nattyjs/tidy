import { ValidatorParams } from "../../interfaces/validator-params";
import { Linq } from "../../statics/linq";
import { RegexValidator } from "./regex-validator";

export class ValidatorValueChecker {

  static pass(params: ValidatorParams, config: any): boolean {
    if (Linq.execute(config,params))
      return RegexValidator.isNotBlank(params.value)
    else
      return false;
  }

  static passArrayValue(params: ValidatorParams, config: any) {
    if (Linq.execute(config, params))
      return params.value instanceof Array;
    else
      return false;
  }
}
