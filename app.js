import { addQoute } from "./components/AddList/addQoute.js";
import { addTodo } from "./components/AddList/addTodo.js";
import { init } from "./components/init.js";
import { randomQoutes } from "./components/randomQoutes.js";
import { toggleQoute } from "./components/ToggleBox/toggleQoute.js";
import { toggleTodoList } from "./components/ToggleBox/toggleTodoList.js";
import { submitMainFocus } from "./components/EnterInput/enterInputFocus.js";
import { submitUserName } from "./components/EnterInput/enterInputName.js";
import updateTimeElements from "./components/updateTimeElements.js";
import { deleteAndCheckEl } from "./components/deleteAndCheckEl.js";
import { handleEnterKeyPress } from "./components/Edit&EnterElement/handleEnterKeyPress.js";
import { editElement } from "./components/Edit&EnterElement/editElement.js";
import { selectAllList } from "./components/FilteringList/selectAllList.js";
import { selectActive } from "./components/FilteringList/selectActive.js";
import { selectCompleted } from "./components/FilteringList/selectCompleted.js";
import { clearAllTodoList } from "./components/ClearAllList/clearAllTodoList.js";
import { clearAllQouteList } from "./components/ClearAllList/clearAllQouteList.js";
import { renderAllQouteList } from "./components/Rendering/renderAllQouteList.js";
import { qoutes } from "./data.js";
import { toggleBtnList } from "./components/ToggleBox/toggleBtnList.js";
import { goBacktoFormFocus } from "./components/goBacktoFormFocus.js";
export const welcomeSection = document.querySelector(".section__welcome");
const formWelcome = document.getElementById("form__welcome");
export const inputName = document.getElementById("input__name");
export const mainHomePage = document.querySelector(".main__homepage");
export const formFocus = document.getElementById("form__focus");
export const inputFocus = document.getElementById("input__focus");
const currentTime = document.querySelector(".current__time");
const greeting = document.querySelector(".greeting");
export const focusOutput = document.querySelector(".focus__output");
export const userName = document.querySelector(".user__name");
export const focusInfo = document.querySelector(".focus__info");
export const qoute = document.querySelector(".qoute");
const formAddTodo = document.querySelector(".form__addTodo");
const formAddQoute = document.querySelector(".form__addQoute");
const btnRandomQoute = document.querySelector(".btn__random");
const btnAddTodo = document.querySelector(".btn__addTodo");
const btnAddQoute = document.querySelector(".btn__addQoute");
export const inputAddTodo = document.querySelector(".input__addTodo");
export const inputAddQoute = document.querySelector(".input__addQoute");
export const todoListBox = document.querySelector(".todoList__box");
export const qouteBox = document.querySelector(".qoute__box");
export const sectionQoute = document.querySelector(".section__qoute");
export const sectionTodoList = document.querySelector(".section__todoList");
const editUserName = document.querySelector(".edit__name");
const editFocusInfo = document.querySelector(".edit__focus");
const clearFocus = document.querySelector(".clear__focus");
const btnSelectAll = document.querySelector(".btn__select-all");
const btnSelectActive = document.querySelector(".btn__select-active");
const btnSelectCompleted = document.querySelector(".btn__select-completed");
const btnClearAllTodoList = document.querySelector(".btn__clear-all-todolist");
const btnClearAllQouteList = document.querySelector(
  ".btn__clear-all-qoutelist"
);
export const containerQouteList = document.querySelector(
  ".container__qoute-list"
);
const btnSeeList = document.querySelector(".btn__see-list");
export const qouteListBox = document.querySelector(".qoute__list-box");
export const errorMessageTodo = document.querySelector(".error__message-todo");
export const errorMessageQoute = document.querySelector(
  ".error__message-qoute"
);
export const appState = {
  todoListItem: JSON.parse(localStorage.getItem("todoListData")) || [],
  qouteListItem: JSON.parse(localStorage.getItem("qouteData")) || [],
};

export function saveTodoList() {
  localStorage.setItem("todoListData", JSON.stringify(appState.todoListItem));
}

export function saveQouteList() {
  localStorage.setItem("qouteData", JSON.stringify(appState.qouteListItem));
}

setInterval(() => {
  const { greetingText, formattedTime } = updateTimeElements();

  greeting.textContent = greetingText;
  currentTime.textContent = formattedTime;

  // if (seconds === 20) {
  //   clearInterval(time)
  // }
}, 1000);

init();
renderAllQouteList([...appState.qouteListItem, ...qoutes]);
formWelcome.addEventListener("submit", submitUserName);
formFocus.addEventListener("submit", submitMainFocus);
btnAddTodo.addEventListener("click", toggleTodoList);
btnAddQoute.addEventListener("click", toggleQoute);
formAddTodo.addEventListener("submit", addTodo);
formAddQoute.addEventListener("submit", addQoute);
btnRandomQoute.addEventListener("click", randomQoutes);
todoListBox.addEventListener("click", deleteAndCheckEl);
userName.addEventListener("keydown", handleEnterKeyPress.bind(null, userName));
editUserName.addEventListener("click", editElement.bind(null, userName));
focusInfo.addEventListener(
  "keydown",
  handleEnterKeyPress.bind(null, focusInfo)
);
editFocusInfo.addEventListener("click", editElement.bind(null, focusInfo));
clearFocus.addEventListener("click", goBacktoFormFocus);
btnSelectAll.addEventListener("click", selectAllList);
btnSelectActive.addEventListener("click", selectActive);
btnSelectCompleted.addEventListener("click", selectCompleted);
btnClearAllTodoList.addEventListener("click", clearAllTodoList);
btnClearAllQouteList.addEventListener("click", clearAllQouteList);
btnSeeList.addEventListener("click", toggleBtnList);
