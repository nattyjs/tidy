import { ValidatorNames } from "../../const/validator-names";
import { UrlConfig } from "../../interfaces/validator-config/url-config";
import { urlValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function url(config?: UrlConfig) {
    return baseDecoratorFunction(ValidatorNames.url, config|| {},urlValidator)    
}

