import { BaseValidatorConfig } from "./base-validator-config";

export interface TimeConfig extends BaseValidatorConfig{
    allowSeconds?: boolean;
    
}

export interface TimeRelationConfig extends BaseValidatorConfig {
    value?: string;
    fieldName?: string;
    allowSeconds?: boolean;
}

export interface MinTimeConfig extends TimeRelationConfig {
    operator?: ">" | ">=";
    
}

export interface MaxTimeConfig extends TimeRelationConfig {
    operator?: "<" | "<=";
    
}