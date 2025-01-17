const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input")
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // JSON은 array를  string으로 만들어주는 함수
}

function deleteToDo(event) {
  //   console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  //   console.log(li.id);
  li.remove();
  //   console.log(typeof li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  // console.log("I will paint", newToDo);
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "  ❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  //   console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //   console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// sexyFiler는 true를 리턴해야함. 이를 array에 포함하는거
// function sexyFilter() {

// }
