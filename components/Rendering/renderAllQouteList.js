"use strict";
import { qouteListBox } from "../../app.js";

export function renderAllQouteList(lists) {
  const html = lists.map((list) => `<li>"${list}"</li>`).join(" ");

  qouteListBox.innerHTML = "";
  qouteListBox.insertAdjacentHTML("afterbegin", html);
}
