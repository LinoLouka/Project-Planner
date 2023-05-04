//Import
import { displayHtml } from "./displayHtml.js";
import { objetListToDo } from "./objetListToDo.js";
import { getTimeFormat } from "./dateTimeFormat.js";

//Date, heure

document.getElementById("date").value = getTimeFormat(new Date());

displayHtml(objetListToDo);
