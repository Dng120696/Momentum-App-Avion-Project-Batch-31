import { qoutes } from "../data.js";
import { qoute } from "../app.js";

// RANDOM QOUTES
export function randomQoutes() {
  const random = Math.floor(Math.random() * qoutes.length);
  qoute.textContent = `"${qoutes[random]}"`;
}
