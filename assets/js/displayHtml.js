import { getCorrectDateFormat } from "./dateTimeFormat.js";

export function displayHtml(listToDo) {
  const sectionDisplayToDo = document.querySelector(".displayToDo");
  sectionDisplayToDo.innerHTML = "";

  //Date, heure
  document.getElementById("date").value = getCorrectDateFormat();

  listToDo.forEach((toDo) => {
    let articleToDo = document.createElement("article");
    let divImgTodo = document.createElement("div");
    let divContentTodo = document.createElement("div");
    let divFuncTodo = document.createElement("div");
    articleToDo.className = "displayToDo__articleTodo";
    divImgTodo.className = `articleTodo__divImgTodo ${toDo.img}`;
    divContentTodo.className = "articleTodo__divContentTodo";
    divFuncTodo.className = "articleTodo__divFuncTodo";
    divContentTodo.innerHTML = `<h4 class="divContentTodo__title">${
      toDo.title
    }</h4>
    <span class="divContentTodo__contentTxt">${toDo.contentTxt}</span>  
    <input type="datetime-local" class="divContentTodo__date" value="${
      toDo.date
    }">
    <span class="divContentTodo__States ${toDo.states
      .toLowerCase()
      .replace(" ", "")}"> ${toDo.states}</span>`;
    divFuncTodo.innerHTML = `<div id="todo_delete"></div>
    <div id="todo_modify"></div>`;

    articleToDo.appendChild(divImgTodo);
    articleToDo.appendChild(divContentTodo);
    articleToDo.appendChild(divFuncTodo);

    sectionDisplayToDo.appendChild(articleToDo);
  });
}
