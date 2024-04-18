import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function stripLow(keepNewLines?:boolean) {
    return baseSanitizerDecoratorFunction(SanitizerNames.stripLow, keepNewLines,SANITIZERS.stripLow)    
}

