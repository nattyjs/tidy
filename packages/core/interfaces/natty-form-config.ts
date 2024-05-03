import { FormConfig } from "@nattyjs/validation-decorators";
import { RunValidatorStrategy } from "../enums/run-validator-strategy";

export interface NattyFormConfig extends FormConfig{
    runValidatorStrategy?:RunValidatorStrategy;
}