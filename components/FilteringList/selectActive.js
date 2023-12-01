import { renderList } from "../Rendering/renderList.js";
import { appState } from "../../app.js";

export function selectActive() {
  const active = appState.todoListItem.filter((todo) => !todo.isCompleted);
  renderList(active);
}
