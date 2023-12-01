import { qoutes } from "../../data.js";
import { renderQoute } from "../Rendering/renderQoute.js";
import {
  inputAddQoute,
  appState,
  errorMessageQoute,
  saveQouteList,
} from "../../app.js";
import { renderAllQouteList } from "../Rendering/renderAllQouteList.js";

export function addQoute(e) {
  e.preventDefault();
  const inputVal = inputAddQoute.value;
  if (!inputVal) return;
  if (![...appState.qouteListItem, ...qoutes].includes(inputVal)) {
    errorMessageQoute.classList.add("show");
    errorMessageQoute.textContent = "";
    appState.qouteListItem.unshift(inputVal);
    inputAddQoute.value = "";
    saveQouteList();
    renderQoute(appState.qouteListItem);
    renderAllQouteList([...appState.qouteListItem, ...qoutes]);
  } else {
    errorMessageQoute.classList.add("show");
    errorMessageQoute.textContent = "This qoute item already exists.";
  }
}
