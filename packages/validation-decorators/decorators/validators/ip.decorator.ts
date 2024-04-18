import { ValidatorNames } from "../../const/validator-names";
import { IpConfig } from "../../interfaces/validator-config/ip-config";
import { ipValidator } from "../../validators";
import { baseDecoratorFunction } from "./base-decorator.function";

export function ip(config?:IpConfig) {
    return baseDecoratorFunction(ValidatorNames.ip, config|| {},ipValidator)    
}

