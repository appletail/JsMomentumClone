const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName'

const paintGreetings = (userName) => {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const onLoginSubmit  = (event) => {
  event.preventDefault();
  const userName = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(userName)

  localStorage.setItem(USERNAME_KEY, userName);
};

loginForm.addEventListener('submit', onLoginSubmit);


const savedUserName = localStorage.getItem(USERNAME_KEY);

if (!savedUserName) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else { 
  paintGreetings(savedUserName)
};