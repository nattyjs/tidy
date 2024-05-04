import { FormConfig } from "../interfaces/natty-form-config";
import { nattyForms } from "./natty-forms";

export function configure(config: FormConfig) {
    nattyForms.configure(config);
  }