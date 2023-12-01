"use strict";
export function handleEnterKeyPress(element, e) {
  if (e.key === "Enter") {
    e.preventDefault();
    element.contentEditable = "false";
    element.focus();
    element.style.borderBottom = "none";
  }
}
