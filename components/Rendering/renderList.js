import { todoListBox } from "../../app.js";

export function renderList(lists) {
  const html =
    lists.length === 0
      ? `<li class= 'list__empty'>Add a To do List to Get Started</li>`
      : lists
          .map(
            (list, i) =>
              `<li class = 'list' ><span class ='todo__txt ${
                lists[i].isCompleted ? "completed__todo" : ""
              }' data-index=${i}>${
                list.text
              }</span><span class = 'icons flex'><i class="fa-regular fa-circle-check btn__check ${
                lists[i].isCompleted ? "checked" : ""
              }" data-check=${i}></i><i class="fa-solid fa-trash-can btn__delete" data-del =${i}></i></span></li>`
          )
          .join(" ");

  todoListBox.innerHTML = "";
  todoListBox.insertAdjacentHTML("afterbegin", html);
}
