import { getCorrectDateFormat } from "./dateTimeFormat.js";

export function displayHtml(listToDo) {
  const divfilterSort__filter = document.querySelector(".filterSort__filter");

  const sectionDisplayToDo = document.querySelector(".displayToDo");
  sectionDisplayToDo.innerHTML = "";

  divfilterSort__filter.innerHTML = `
      <label for="todo">todo</label>
      <label for="doing">doing</label>
      <label for="done">done</label>
        `;
  let inputDone = document.createElement("input");
  let inputTodo = document.createElement("input");
  let inputDoing = document.createElement("input");

  inputDone.classList.add("visibility_hide");
  inputTodo.classList.add("visibility_hide");
  inputDoing.classList.add("visibility_hide");
  inputDone.id = "done";
  inputTodo.id = "todo";
  inputDoing.id = "doing";
  inputDone.type = "checkbox";
  inputTodo.type = "checkbox";
  inputDoing.type = "checkbox";
  inputTodo.addEventListener("change", (e) => {
    console.log("test3");
  });
  inputDoing.addEventListener("change", (e) => {
    console.log("test1");
  });
  inputDone.addEventListener("change", (e) => {
    console.log("test2");
  });

  divfilterSort__filter.append(inputTodo, inputDoing, inputDone);

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
    divFuncTodo.innerHTML = `<div class="todo_delete"></div>
    <div class="todo_modify"></div>`;

    articleToDo.appendChild(divImgTodo);
    articleToDo.appendChild(divContentTodo);
    articleToDo.appendChild(divFuncTodo);

    sectionDisplayToDo.appendChild(articleToDo);
  });

  //           <input type="checkbox" id="todo" class="visibility_hide" checked="checked" disabled>
}
