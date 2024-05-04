import { FormConfig as NattyFormConfig } from "@nattyjs/validation-decorators";
import { RunValidatorStrategy } from "../enums/run-validator-strategy";

export interface FormConfig extends NattyFormConfig{
    runValidatorStrategy?:RunValidatorStrategy;
}