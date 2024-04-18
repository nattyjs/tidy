import { ValidatorFn } from "@tidyjs/validation-decorators";

type PropValidator = {
    config:any,
    validator:(params:any)=>ValidatorFn
}
type ValidatorConfig<T> = { [key in keyof Partial<T>]: PropertyValidatorType<T[key],T[key]>}
export type PropertyValidatorType<T,Prop> = T extends number?PropValidator:T extends string ? PropValidator:T extends object?ValidatorConfig<T>:T extends Array<T> ? ValidatorConfig<T>:T;   
