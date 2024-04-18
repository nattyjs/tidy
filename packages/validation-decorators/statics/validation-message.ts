import { validationForms } from "../const/natty-forms";

export class ValidationMessage{
    static getValidatorErrorMessage(name:string){
        let message = '';
        if(validationForms.formConfig)
            message = validationForms.formConfig.errorMessage.validator[name];
        return message
    }
    static toJson(key: string, config:any, values: any) {
        let message = config ? config.message : null;
        let messageKey = undefined;
        if(!message && config && config.messageKey)
            messageKey = config.messageKey;
            let messageText = (message) ? message : config.messagekey? ValidationMessage.getValidatorErrorMessage(config.messageKey) : ValidationMessage.getValidatorErrorMessage(key) 
            messageText = messageText || "";
            values.forEach((t ,index)=> {
            messageText = messageText.replace(`{{${index}}}`, t);
        });
        let jObject = {};
        jObject[key] = {
            message: messageText, refValues: values
        };
        return jObject;
    }
    static null() {
        return null;
    }
}