import { ValidatorNames } from "../../const/validator-names";
import { CreditCardConfig } from "../../interfaces/validator-config/credit-card-config";
import { creditCardValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function creditCard(config:CreditCardConfig) {
    return baseDecoratorFunction(ValidatorNames.creditCard, config|| {},creditCardValidator)    
}
