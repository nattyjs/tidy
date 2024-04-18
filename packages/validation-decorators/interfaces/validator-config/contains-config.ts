import { BaseValidatorConfig } from './base-validator-config';
export interface ContainsConfig extends BaseValidatorConfig{
    value?: string;
    values?: any[];
}
