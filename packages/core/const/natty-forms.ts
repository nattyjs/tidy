import { validationForms } from "@tidyjs/validation-decorators";
import { NattyFormConfig } from "../interfaces/natty-form-config";
import { FormConfig } from "@tidyjs/validation-decorators";

export const nattyForms:
    {
        formConfig:NattyFormConfig;
        configure(config: NattyFormConfig);
    } = new (class {
        formConfig:NattyFormConfig = {
            dateConfig:{
                format:"ymd",
                seperator:'-'
            }
        };
        configure(config:NattyFormConfig){
            this.formConfig= {...this.formConfig,...config};
            validationForms.configure(this.formConfig as FormConfig)
        }
    })