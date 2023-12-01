"use strict";
import { renderList } from "./Rendering/renderList.js";
import { appState, saveTodoList } from "../app.js";

export function deleteAndCheckEl(e) {
  const el = e.target;
  if (el.classList.contains("btn__delete")) {
    const { del } = el.dataset;
    appState.todoListItem.splice(del, 1);
    renderList(appState.todoListItem);
    saveTodoList();
  }
  if (el.classList.contains("btn__check")) {
    const { check } = el.dataset;
    appState.todoListItem[check].isCompleted =
      !appState.todoListItem[check].isCompleted;

    document
      .querySelector(`.todo__txt[data-index='${check}']`)
      .classList.toggle("completed__todo");
    document
      .querySelector(`.btn__check[data-check='${check}']`)
      .classList.toggle("checked");
    saveTodoList();
  }
}
