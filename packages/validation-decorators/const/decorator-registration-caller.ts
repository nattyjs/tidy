import { PropertyDecoratorConfig } from "@tidyjs/types";

export const decoratorRegistrationCaller:
    {
        register:(config:PropertyDecoratorConfig)=>{};
    } = new (class {
        register=undefined
    })