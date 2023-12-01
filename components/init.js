import { randomQoutes } from "./randomQoutes.js";
import { renderList } from "./Rendering/renderList.js";
import { renderQoute } from "./Rendering/renderQoute.js";
import { appState } from "../app.js";

export function init() {
  renderQoute(appState.qouteListItem);
  renderList(appState.todoListItem);
  randomQoutes();
}
