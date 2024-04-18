import { IpVersion } from "../../enums/ip-version";
import { BaseValidatorConfig } from "./base-validator-config";

export interface IpConfig extends BaseValidatorConfig {
  version?: IpVersion;
  isCidr?: boolean;
}
