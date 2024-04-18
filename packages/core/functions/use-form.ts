import { Type } from "../interfaces/type";
import { FormGroup } from "../domain/form-group";
import { IFormGroup } from "../interfaces/i-form-group";
import { PropertyValidatorType } from "../types/property-validator-type";
import { ControlConfig } from "../types/form-group-definition";



export function useForm<T>(entity: T,config?: {type?:Type<T>, validators?: { [key in keyof Partial<T>]: PropertyValidatorType<T[key], T[key]> }}): ControlConfig<T> & IFormGroup {
        return new FormGroup(entity, {
            type:config?.type,
            validators: config?.validators as any
        }) as any
}
