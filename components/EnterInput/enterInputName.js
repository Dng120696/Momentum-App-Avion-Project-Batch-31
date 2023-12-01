import {
  inputName,
  welcomeSection,
  mainHomePage,
  userName,
} from "../../app.js";

export function submitUserName(e) {
  e.preventDefault();
  const inputVal = inputName.value;
  // guard clause
  if (!inputVal) return;
  welcomeSection.classList.add("hidden");
  mainHomePage.classList.remove("hidden");
  userName.textContent =
    inputVal.slice(0, 1).toUpperCase() + inputVal.slice(1).toLowerCase();
  inputName.value = "";
}
