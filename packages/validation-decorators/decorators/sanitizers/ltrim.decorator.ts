import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function ltrim() {
    return baseSanitizerDecoratorFunction(SanitizerNames.ltrim, undefined,SANITIZERS.ltrim)    
}

