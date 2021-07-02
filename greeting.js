const loginForm=document.querySelector('#loginform');
const loginInput = loginForm.querySelector("input");
const loginBtn=loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting=document.querySelector("#greeting");
const toDo=document.querySelector('#todo-form');
const logOutBtn=document.querySelector('#log-out');
const toDoLists=document.querySelector('.todo-list');
const HIDDEN_CLASSNAME="hidden";
const USER_NAME="username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME,username);
    paintGreetings(username);
    toDoLists.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDo.classList.remove(HIDDEN_CLASSNAME);
  logOutBtn.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText=`안녕하세요, ${username}님`;
}
function handlerLogOutBtn(){
  localStorage.removeItem(USER_NAME);
  toDo.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  toDoLists.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);  
  logOutBtn.classList.add(HIDDEN_CLASSNAME);
}
const savedUsername=localStorage.getItem(USER_NAME);
logOutBtn.addEventListener("click",handlerLogOutBtn);

if(savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greeting
    paintGreetings(savedUsername);
}
