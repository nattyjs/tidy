import { SanitizerNames } from "../../const/sanitizer-names"
import { SANITIZERS } from "../../const/sanitizers"
import { SanitizeConfig } from "../../interfaces/sanitizer-config/sanitize-config"
import { baseSanitizerDecoratorFunction } from "./base-sanitizer-decorator.function"

export function sanitize(config: SanitizeConfig) {
    return baseSanitizerDecoratorFunction(SanitizerNames.sanitize, config,SANITIZERS.sanitize)    
}

