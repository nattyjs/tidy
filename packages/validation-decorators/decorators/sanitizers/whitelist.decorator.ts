import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function whitelist(chars:string) {
    return baseSanitizerDecoratorFunction(SanitizerNames.blacklist,chars,SANITIZERS.whitelist)     
}

