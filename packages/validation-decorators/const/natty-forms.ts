import { FormConfig } from "../interfaces/form-config";

export const validationForms:
    {
        formConfig:FormConfig;
        configure(config: FormConfig):void;
    } = new (class {
        formConfig:FormConfig;
        configure(config:FormConfig){
            this.formConfig= config;
        }
    })