"use strict";
export function editElement(element) {
  element.contentEditable = "true";
  element.focus();
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  element.style.borderBottom = "2px solid #fff";
}
