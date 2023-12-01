import { renderList } from "../Rendering/renderList.js";
import { appState } from "../../app.js";

export function selectAllList() {
  renderList(appState.todoListItem);
}
