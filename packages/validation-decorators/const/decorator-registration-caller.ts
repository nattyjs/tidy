import { PropertyDecoratorConfig } from "@nattyjs/types";

export const decoratorRegistrationCaller:
    {
        register:(config:PropertyDecoratorConfig)=>{};
    } = new (class {
        register=undefined
    })