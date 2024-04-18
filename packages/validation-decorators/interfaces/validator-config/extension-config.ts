import { BaseValidatorConfig } from "./base-validator-config";

export interface ExtensionConfig extends BaseValidatorConfig {
    extensions?: string[];
    isExcludeExtensions?: boolean;
}
