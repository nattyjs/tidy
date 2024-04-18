import { BaseValidatorConfig } from "./base-validator-config";

export interface PatternConfig extends BaseValidatorConfig{
    expression?: { [key: string]:  RegExp }
   
}
