import { BaseValidatorConfig } from "./base-validator-config";

export interface RelationalOperatorConfig extends BaseValidatorConfig{
    fieldName?: string;
    value?: any;
    isArrayControl?: boolean;
}
