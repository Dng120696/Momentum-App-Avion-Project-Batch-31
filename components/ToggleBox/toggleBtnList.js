"use strict";
import { containerQouteList } from "../../app.js";

export function toggleBtnList() {
  containerQouteList.classList.toggle("qoute-list-show");
  if (containerQouteList.classList.contains("qoute-list-show")) {
    containerQouteList.style.zIndex = "15";
  } else {
    containerQouteList.style.zIndex = "-1";
  }
}
