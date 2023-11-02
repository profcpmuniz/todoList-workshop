/* eslint-disable */
import "./style.css";

const todoList = [];

function loadTodoList() {
  let ulElement = document.querySelector(".todoList");
  let spanElement = document.querySelector(".todoListTotal");
  ulElement.innerHTML = "";
  spanElement.innerHTML = "";
  if (todoList.length === 0) {
    ulElement.innerHTML = "<li>No Task</li>";
    return;
  }
  spanElement.innerHTML = `${todoList.length} item left`;
  todoList.forEach(item => {
    let liElement = document.createElement("li");
    liElement.innerHTML = item;
    let buttonElement = document.createElement("button");
    buttonElement.addEventListener("click", () => {
      let position = todoList.indexOf(item);
      todoList.splice(position, 1);
      loadTodoList();
    });
    buttonElement.innerHTML = "Delete";
    liElement.appendChild(buttonElement);
    ulElement.appendChild(liElement);
  });
}
window.onload = function() {
  let input = document.getElementById("taskInput");
  input.addEventListener("blur", ev => {
    let content = ev.target.value;
    if (content) {
      todoList.push(content);
      ev.target.value = "";
      loadTodoList();
    }
  });
};
