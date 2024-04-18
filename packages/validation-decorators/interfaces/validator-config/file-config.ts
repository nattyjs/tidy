import { BaseValidatorConfig } from "./base-validator-config";

export interface FileConfig extends BaseValidatorConfig{
  maxFiles?:number;
  minFiles?:number;
}
