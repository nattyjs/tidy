import { baseSanitizerDecoratorFunction } from './base-sanitizer-decorator.function';
import { SanitizerNames } from '../../const/sanitizer-names';
import { SANITIZERS } from '../../const/sanitizers';
export function escape() {
    return baseSanitizerDecoratorFunction(SanitizerNames.blacklist, undefined,SANITIZERS.escape)    
}

