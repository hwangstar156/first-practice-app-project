const toDoForm=document.querySelector('#todo-form');
const toDoInput=document.querySelector("#todo-form input")
const toDoList=document.querySelector('.todo-list');
const TODO_LISTS="todo-list"
const clearBtn=document.querySelector('#clearBtn');
let toDos=[];

function saveToDos(){
  localStorage.setItem(TODO_LISTS,JSON.stringify(toDos));
}

function deleteTodo(event){
  const li=event.target.parentNode;
  li.remove();
  toDos=toDos.filter(items=>items.id !=li.id);
  saveToDos();
}

function deleteTodoAll(event){
  const lists=event.target.parentNode.querySelectorAll('li');
  lists.forEach(element => {
    element.remove();
  });
  toDos=[]
  saveToDos();
}

function paintTodo(newTOdoobj){
    const li=document.createElement("li");
    li.id=newTOdoobj.id
    const span=document.createElement("span");
    span.innerText=newTOdoobj.text;
    const button=document.createElement("button");
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click",deleteTodo);
    toDoList.appendChild(li);
}

function handletoDOSubmit(event){
  event.preventDefault();
  const newTOdo=toDoInput.value;
  toDoInput.value=""
  const newToDoObj={
    text:newTOdo,
    id:Date.now(),
  };
  toDos.push(newToDoObj);
  paintTodo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handletoDOSubmit);
clearBtn.addEventListener("click",deleteTodoAll);

const savedToDos=localStorage.getItem(TODO_LISTS);

if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintTodo);
}