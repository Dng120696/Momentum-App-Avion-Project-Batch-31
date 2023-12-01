import { formFocus, focusOutput } from "../app.js";

export function goBacktoFormFocus() {
  formFocus.classList.remove("hidden");
  focusOutput.classList.add("hidden");
}
