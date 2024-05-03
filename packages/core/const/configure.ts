import { NattyFormConfig } from "../interfaces/natty-form-config";
import { nattyForms } from "./natty-forms";

export function configure(config: NattyFormConfig) {
    nattyForms.configure(config);
  }