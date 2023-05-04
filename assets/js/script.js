//Import
import { displayHtml } from "./displayHtml.js";
import { objetListToDo } from "./objetListToDo.js";
import { getTimeFormat } from "./dateTimeFormat.js";

//Date, heure

document.getElementById("date").value = getTimeFormat(
  `1995-03-06 03:24`.replace(" ", "T")
);
console.log();

displayHtml(objetListToDo);
