import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function suffix(text:string) {
    return baseSanitizerDecoratorFunction(SanitizerNames.suffix, text,SANITIZERS.suffix)     
}

