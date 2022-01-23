const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");
const weather = document.querySelector("#weather");
const quote = document.querySelector("#quote");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
}
function showGreeting(username){
  greeting.innerText = `Good day, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
}

const itemUsername = localStorage.getItem(USERNAME_KEY);

if(itemUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.add(HIDDEN_CLASSNAME);
  quote.classList.add(HIDDEN_CLASSNAME);
  weather.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else {
  showGreeting(itemUsername);
}
//toDoForm.classList.add(HIDDEN_CLASSNAME);
///quote.classList.add(HIDDEN_CLASSNAME);
//weather.classList.add(HIDDEN_CLASSNAME);
//toDoForm.classList.remove(HIDDEN_CLASSNAME);
//quote.classList.remove(HIDDEN_CLASSNAME);
//weather.classList.remove(HIDDEN_CLASSNAME);