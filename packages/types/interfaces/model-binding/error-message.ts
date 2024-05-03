import { TypeErrorMessage } from "./type-error-message";

export interface ErrorMessage{
    typed?:TypeErrorMessage;
    validator?:{[key:string]:string}
}