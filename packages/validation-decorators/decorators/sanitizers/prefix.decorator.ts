import { SanitizerNames } from "../../const/sanitizer-names";
import { SANITIZERS } from "../../const/sanitizers";
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function";

export function prefix(text:string) {
    return baseSanitizerDecoratorFunction(SanitizerNames.blacklist,text,SANITIZERS.escape)    
}

