const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

let toDos = [];

const TODOS_KEY = 'toDos'

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id != li.id);
  saveToDos();
  li.remove();
};

const paintToDo = (newToDoObj) => {
  const li = document.createElement('li');
  li.id = newToDoObj.id;
  const span = document.createElement('span');
  span.innerText = newToDoObj.text;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
};