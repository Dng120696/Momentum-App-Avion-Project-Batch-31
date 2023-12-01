import { appState, saveTodoList } from "../../app.js";
import { renderList } from "../Rendering/renderList.js";

export function clearAllTodoList() {
  if (appState.todoListItem.length === 0) return;

  appState.todoListItem = [];

  saveTodoList();
  renderList(appState.todoListItem);
}
