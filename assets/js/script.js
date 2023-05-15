//Import
import { displayHtml } from "./displayHtml.js";
import { objetListToDo } from "./objetListToDo.js";
import { sortTodoByKey } from "./sortTodoByKey.js";

let mainListToDo = objetListToDo;

displayHtml(mainListToDo);

mainListToDo = sortTodoByKey(objetListToDo, "img");

displayHtml(mainListToDo);
