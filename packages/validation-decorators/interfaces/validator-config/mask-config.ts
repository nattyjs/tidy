import { BaseValidatorConfig } from "./base-validator-config";

export interface MaskConfig extends BaseValidatorConfig {
    mask: string;
    minLength?: number;
    valueWithMask?: boolean;
}
