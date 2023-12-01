import { inputFocus, formFocus, focusOutput, focusInfo } from "../../app.js";

export function submitMainFocus(e) {
  e.preventDefault();
  const inputVal = inputFocus.value;
  if (!inputVal) return;
  formFocus.classList.add("hidden");
  focusOutput.classList.remove("hidden");
  focusInfo.textContent =
    inputVal.slice(0, 1)[0].toUpperCase() + inputVal.slice(1).toLowerCase();
  inputFocus.value = "";
}
