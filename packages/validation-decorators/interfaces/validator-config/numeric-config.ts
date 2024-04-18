import { NumericValueType } from "../../enums/numeric-value-type";
import { BaseValidatorConfig } from "./base-validator-config";

export interface NumericConfig extends BaseValidatorConfig {
  allowDecimal?:boolean;
  acceptValue?:NumericValueType;
  isFormat?:boolean;
  digitsInfo?: string;
    persistZero?: boolean;
}
