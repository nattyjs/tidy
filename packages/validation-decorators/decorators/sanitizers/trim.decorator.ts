import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function trim() {
    return baseSanitizerDecoratorFunction(SanitizerNames.trim, undefined,SANITIZERS.trim)    
}

