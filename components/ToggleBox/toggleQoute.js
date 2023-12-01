import {
  sectionQoute,
  sectionTodoList,
  containerQouteList,
} from "../../app.js";

export function toggleQoute() {
  sectionQoute.classList.toggle("hide");

  if (
    !sectionTodoList.classList.contains("hide") ||
    containerQouteList.classList.contains("qoute-list-show")
  ) {
    sectionTodoList.classList.add("hide");
    sectionQoute.classList.remove("zIndex");
    containerQouteList.classList.remove("qoute-list-show");
    containerQouteList.style.zIndex = "-1";
  } else {
    sectionQoute.classList.add("zIndex");
  }
}
