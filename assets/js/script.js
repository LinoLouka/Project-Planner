//Import
// import { displayHtml } from "./displayHtml.js";
// import { objetListToDo } from "./objetListToDo.js";

//Date, heure
const dateActuelle = new Date(
  new Date().toLocaleString("fr-BE", {
    timeZone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
  })
);
let yyyy = dateActuelle.getFullYear();
let mm = dateActuelle.getMonth();
let dd = dateActuelle.getDate();
let hh = dateActuelle.getHours();
let min = dateActuelle.getMinutes();
let datetime = new Date(Date.UTC(yyyy, mm, dd, hh, min));
document.getElementById("date").value = datetime.toISOString().slice(0, 16);

console.log();
