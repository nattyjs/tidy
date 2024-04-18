import { ValidatorNames } from "../../const/validator-names";
import { ExtensionConfig } from "../../interfaces/validator-config/extension-config";
import { extensionValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function extension(config:ExtensionConfig) {
    return baseDecoratorFunction(ValidatorNames.extension, config|| {},extensionValidator)    
}
