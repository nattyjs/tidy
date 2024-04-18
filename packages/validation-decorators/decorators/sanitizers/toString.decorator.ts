import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function toString() {
    return baseSanitizerDecoratorFunction(SanitizerNames.toString, undefined,SANITIZERS.toString)     
}

