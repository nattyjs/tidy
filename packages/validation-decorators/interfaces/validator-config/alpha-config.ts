import { BaseValidatorConfig } from "./base-validator-config";

export interface AlphaConfig extends BaseValidatorConfig {
    allowWhiteSpace?: boolean;
    locale?: string;
    allowCharacters?:string;
}
