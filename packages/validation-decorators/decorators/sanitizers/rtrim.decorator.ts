import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function rtrim() {
    return baseSanitizerDecoratorFunction(SanitizerNames.rtrim, undefined,SANITIZERS.rtrim)    
}

