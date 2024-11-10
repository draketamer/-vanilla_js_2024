// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// 아래와 동일한 표현임

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("please write your name.");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } else {
    console.log("hello", loginInput.value);
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
