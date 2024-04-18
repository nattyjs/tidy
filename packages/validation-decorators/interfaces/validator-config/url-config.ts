import { UrlValidationType } from '../../enums/url-validation-type';
import { BaseValidatorConfig } from './base-validator-config';
export interface UrlConfig extends BaseValidatorConfig{
    urlValidationType?: UrlValidationType
}
