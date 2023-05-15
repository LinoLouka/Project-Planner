//Import
import { displayHtml } from "./displayHtml.js";
import { objetListToDo } from "./objetListToDo.js";
import { sortTodoByKey } from "./sortTodoByKey.js";

let mainListToDo = objetListToDo;

displayHtml(mainListToDo);

mainListToDo = sortTodoByKey(objetListToDo, "img");
document.querySelectorAll(".visibility_hide").forEach((e) => {
  e.addEventListener("change", () => {
    console.log("test");
    e.parentElement.style.backgroundColor = "red";
  });
});

displayHtml(mainListToDo);
