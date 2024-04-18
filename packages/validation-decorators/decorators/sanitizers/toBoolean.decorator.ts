import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function toBoolean(strict?:boolean) {
    return baseSanitizerDecoratorFunction(SanitizerNames.blacklist, strict,SANITIZERS.toBoolean)     
}

