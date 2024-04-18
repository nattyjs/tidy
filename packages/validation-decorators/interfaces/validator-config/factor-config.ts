import { BaseValidatorConfig } from "./base-validator-config";

export interface FactorConfig extends BaseValidatorConfig {
  dividend?:number;
  fieldName?:string;
}
