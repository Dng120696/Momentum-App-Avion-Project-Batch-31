import { renderList } from "../Rendering/renderList.js";
import { appState } from "../../app.js";

export function selectCompleted() {
  const completed = appState.todoListItem.filter((todo) => todo.isCompleted);
  renderList(completed);
}
