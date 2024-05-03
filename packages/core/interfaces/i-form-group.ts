import { ValidatorFn } from "@nattyjs/validation-decorators";

export interface IFormGroup{
    get valid():boolean;
    get root():IFormGroup;
    get parent():IFormGroup;
    get errors():ValidatorFn;
    submit:boolean;
    get errorMessage():{[key:string]:string}
    get value():any
    setServerErrors(value:{[key:string]:any}):void;
}