import { baseSanitizerDecoratorFunction } from './base-sanitizer-decorator.function';
import { SanitizerNames } from '../../const/sanitizer-names';
import { SANITIZERS } from '../../const/sanitizers';
export function blacklist(chars:string) {
    return baseSanitizerDecoratorFunction(SanitizerNames.blacklist, chars,SANITIZERS.blacklist)    
}

