
import { ControlValidators, RequiredConfig, ValidatorFn } from '@tidyjs/validation-decorators'
import { callValidator } from '../functions/call-validators'
export const Validators={
    required:(config?:RequiredConfig)=>callValidator(config,ControlValidators.required)
}

