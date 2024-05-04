import { ValidatorFn } from "../../types/validator-fn";
import { BaseValidatorConfig } from "./base-validator-config";

export interface ComposeConfig extends BaseValidatorConfig {
    validators:ValidatorFn[];
  }
  