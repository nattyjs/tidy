import { BaseValidatorConfig } from "./base-validator-config";

export interface RangeConfig extends BaseValidatorConfig{
    minimumNumber?: number;
    maximumNumber?: number;
    
}
