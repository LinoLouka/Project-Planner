//Import
import { displayHtml } from "./displayHtml.js";
import { objetListToDo } from "./objetListToDo.js";
//Heure,Dates local
document.getElementById("date").value = new Date(
  new Date().toLocaleString("fr-BE", {
    timeZone: "Europe/Brussels",
  })
)
  .toISOString()
  .slice(0, 16);
