export function displayHtml(listToDo) {
  const sectionDisplayToDo = document.querySelector("#displayToDo");

  listToDo.forEach((toDo) => {
    let articleToDo = document.createElement("article");
    let divImgTodo = document.createElement("div");
    let divContentTodo = document.createElement("div");
    let divFuncTodo = document.createElement("div");
    articleToDo.className = "displayToDo__articleTodo";
    divImgTodo.className = "articleTodo__divImgTodo";
    divContentTodo.className = "articleTodo__divContentTodo";
    divFuncTodo.className = "articleTodo__divFuncTodo";
    
  });
}
+