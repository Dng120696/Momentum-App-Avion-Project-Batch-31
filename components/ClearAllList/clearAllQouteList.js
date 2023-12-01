import { appState, saveQouteList } from "../../app.js";
import { qoutes } from "../../data.js";
import { renderAllQouteList } from "../Rendering/renderAllQouteList.js";
import { renderQoute } from "../Rendering/renderQoute.js";
// console.log(appState.qouteListItem);
export function clearAllQouteList() {
  if (appState.qouteListItem.length === 0) return;

  appState.qouteListItem = [];
  const updatedQoutes = qoutes.filter(
    (qoute) => !appState.qouteListItem.includes(qoute)
  );
  saveQouteList();
  renderQoute(appState.qouteListItem);
  renderAllQouteList(updatedQoutes);
}
