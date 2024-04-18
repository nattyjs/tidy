import { IFormGroup } from "../interfaces/i-form-group";

export type ControlConfig<T> = { [key in keyof T]: FormGroupDefinition<T[key],T[key]>}
export type FormGroupDefinition<T,Prop> = T extends number?number:T extends string ? string:T extends object?ControlConfig<T> & IFormGroup:T extends Array<T> ? ControlConfig<T>[] & IFormGroup:T;   
