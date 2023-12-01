import { renderList } from "../Rendering/renderList.js";
import {
  inputAddTodo,
  appState,
  saveTodoList,
  errorMessageTodo,
} from "../../app.js";

export function addTodo(e) {
  e.preventDefault();
  const inputVal = inputAddTodo.value;
  if (!inputVal) return;
  const isNotDuplicate = appState.todoListItem.every(
    (item) => item.text !== inputVal
  );

  if (isNotDuplicate) {
    errorMessageTodo.textContent = "";
    errorMessageTodo.classList.remove("show");
    appState.todoListItem.push({
      text: inputVal,
      isCompleted: false,
    });
    inputAddTodo.value = "";
    saveTodoList();
    renderList(appState.todoListItem);
  } else {
    errorMessageTodo.textContent = "This todo item already exists.";
    errorMessageTodo.classList.add("show");
  }
}
