import { BaseValidatorConfig } from "./base-validator-config";

export interface CreditCardConfig extends BaseValidatorConfig {
    creditCardTypes?: string[];
    fieldName?:string;
}
