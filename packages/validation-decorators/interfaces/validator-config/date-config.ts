import { BaseValidatorConfig } from './base-validator-config';
export interface DateConfig extends BaseValidatorConfig{
    value?: Date | string;
    fieldName?: string;
    allowISODate?: boolean;
}
