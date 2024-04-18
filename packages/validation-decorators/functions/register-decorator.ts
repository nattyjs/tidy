import { PropertyDecoratorConfig } from "@tidyjs/types";
import { decoratorRegistrationCaller } from "../const/decorator-registration-caller";

export function registerDecorator(config:PropertyDecoratorConfig){
    if(decoratorRegistrationCaller.register)
        decoratorRegistrationCaller.register(config)
}