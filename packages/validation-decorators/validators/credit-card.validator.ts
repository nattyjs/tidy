import { ValidatorNames } from "../const/validator-names";
import { calculate } from "../functions/validators/calculate";
import { checkLength } from "../functions/validators/check-length";
import { getConfigObject } from "../functions/validators/get-config-object";
import { RegexValidator } from "../functions/validators/regex-validator";
import { CreditCardConfig } from "../interfaces/validator-config/credit-card-config";
import { ValidatorParams } from "../interfaces/validator-params";
import { Linq } from "../statics/linq";
import { ValidationMessage } from "../statics/validation-message";
import { ValidatorFn } from "../types/validator-fn";

export function creditCardValidator(configModel: CreditCardConfig,control:ValidatorParams): ValidatorFn {
    let cardDigits: { [key: string]: number[] } = {
        AmericanExpress: [15],
        DinersClub: [14, 16, 19],
        Discover: [16, 19],
        JCB: [16, 19],
        Maestro: [12, 16, 19],
        MasterCard: [16],
        Visa: [13, 16, 19]
    }
    function validate(creditCardNumber: string) {
        var digit = parseInt(creditCardNumber.substring(creditCardNumber.length - 1, creditCardNumber.length));
        return calculate(creditCardNumber.substring(0, creditCardNumber.length - 1)) == parseInt(String(digit)) ? !0 : !1
    }

    function getCardProviderName(cardNumber:string) {
        var cardProviderName = "";
        return /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/.test(cardNumber) ? cardProviderName = "Maestro" : /^5[1-5]/.test(cardNumber) ? cardProviderName = "MasterCard" : /^4/.test(cardNumber) ? cardProviderName = "Visa" : /^3[47]/.test(cardNumber) ? cardProviderName = "AmericanExpress" : /^(?:2131|1800|35)/.test(cardNumber) ? cardProviderName = "JCB" : /^3(?:0[0-5]|[68])/.test(cardNumber) ? cardProviderName = "DinersClub" : /^6(?:011|5)/.test(cardNumber) && (cardProviderName = "Discover"), cardProviderName;
    }

        const controlValue = control.value;
        let config = getConfigObject(configModel);
        const parentObject = control.current;
        if (Linq.execute(config,control)) {
            if (RegexValidator.isNotBlank(controlValue)) {
                let isValid = false;
                let cardTypes = config.fieldName && parentObject[config.fieldName] ? [parentObject[config.fieldName]] : config.creditCardTypes
                let cardType: string = '';
                for (let creditCardType of cardTypes) {
                    isValid = checkLength(controlValue.length, cardDigits[creditCardType]) && getCardProviderName(controlValue) == creditCardType && validate(controlValue);
                    cardType = creditCardType;
                    if (isValid)
                        break;
                }
                if (!isValid)
                    return ValidationMessage.toJson(ValidatorNames.creditCard, config, [controlValue, cardType])
            }
        }
        return ValidationMessage.null();

}
