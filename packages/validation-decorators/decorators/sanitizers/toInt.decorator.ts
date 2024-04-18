import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function toInt(radix?:number) {
    return baseSanitizerDecoratorFunction(SanitizerNames.toInt,radix,SANITIZERS.toInt)     
}

