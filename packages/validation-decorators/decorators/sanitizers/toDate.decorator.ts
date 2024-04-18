import { SanitizerNames } from '../../const/sanitizer-names';
import { SANITIZERS } from '../../const/sanitizers';
import { baseSanitizerDecoratorFunction } from './base-sanitizer-decorator.function';
export function toDate() {
    return baseSanitizerDecoratorFunction(SanitizerNames.toDate, undefined,SANITIZERS.toDate)     
}

