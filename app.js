const form = document.querySelector("form");
const formTextInput = document.querySelector("#todo-text-input");
const ulNotCompleted = document.querySelector(".todos-not-completed");
const ulCompleted = document.querySelector(".todos-completed");
const container = document.querySelector(".container");

let todoArr = [];

let Todo = class {
  constructor(text) {
    this.text = text;
    this.done = false;
    todoArr.push(this);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  new Todo(formTextInput.value);
  displayTodos();
  formTextInput.value = "";
});

const displayTodos = () => {
  ulNotCompleted.innerHTML = "";
  ulCompleted.innerHTML = "";
  for (let todo of todoArr) {
    let li = document.createElement("li");
    li.className = "todo-li";
    li.id = todoArr.indexOf(todo);
    let p = document.createElement("p");
    p.innerText = todo.text;
    li.append(p);
    let div = document.createElement("div");
    div.className = "buttons";
    div.innerHTML = `<a href="#" class="todo-done">&#10003;</a>
    <a href="#" class="todo-delete">X</a>`;
    li.append(div);
    if (todo.done === true) {
      li.style.backgroundColor = "gray";
      p.className = "underline";
      ulCompleted.append(li);
    } else {
      ulNotCompleted.append(li);
    }
  }
};

container.addEventListener("click", (e) => {
  if (e.target.className === "todo-delete") {
    // todoArr.splice(e.target.parentElement.parentElement.id, 1);
    todoArr.splice(e.target.parentElement.parentElement.id, 1);
    displayTodos();
    console.log("CLICKED");
  }
  if (e.target.className === "todo-done") {
    let todo = todoArr[e.target.parentElement.parentElement.id];
    if (todo.done === true) {
      todo.done = false;
      displayTodos();
    } else {
      todo.done = true;
      displayTodos();
    }
  }
});
