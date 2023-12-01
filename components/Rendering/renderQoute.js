import { qouteBox } from "../../app.js";

export function renderQoute(lists) {
  const html =
    lists.length === 0
      ? `<li class= 'list__empty'>Add a Qoute to Get Started</li>`
      : lists.map((list) => `<li>"${list}"</li>`).join(" ");

  qouteBox.innerHTML = "";
  qouteBox.insertAdjacentHTML("afterbegin", html);
}
