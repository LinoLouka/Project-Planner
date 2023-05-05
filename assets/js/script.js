//Import
import { displayHtml } from "./displayHtml.js";
import { objetListToDo } from "./objetListToDo.js";

//Date, heure

document.getElementById("date").value = new Date().toISOString().slice(0, 16);

displayHtml(objetListToDo);
