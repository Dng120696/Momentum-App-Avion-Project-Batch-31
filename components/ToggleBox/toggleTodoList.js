import {
  sectionQoute,
  sectionTodoList,
  containerQouteList,
} from "../../app.js";

export function toggleTodoList() {
  sectionTodoList.classList.toggle("hide");
  if (
    !sectionQoute.classList.contains("hide") ||
    containerQouteList.classList.contains("qoute-list-show")
  ) {
    sectionQoute.classList.add("hide");
    containerQouteList.classList.remove("qoute-list-show");
    containerQouteList.style.zIndex = "-1";
    sectionTodoList.classList.remove("zIndex");
  } else {
    sectionTodoList.classList.add("zIndex");
  }
}
