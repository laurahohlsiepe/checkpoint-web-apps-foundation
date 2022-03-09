let inputOne = document.querySelector("#input1");
let inputTwo = document.querySelector("#input2");
let passwordBtn = document.querySelector("#password-btn");

passwordBtn.addEventListener("click", showPassword);
passwordBtn.addEventListener("click", changeButton);

function showPassword() {
  if (inputOne.type === "password") {
    inputOne.setAttribute("type", "text");
  } else {
    inputOne.setAttribute("type", "password");
  }

  if (inputTwo.type === "password") {
    inputTwo.setAttribute("type", "text");
  } else {
    inputTwo.setAttribute("type", "password");
  }
}

function changeButton() {
  if (passwordBtn.innerText === "Show Passwords") {
    passwordBtn.innerText = "Hide Passwords";
  } else {
    passwordBtn.innerText = "Show Passwords";
  }
}
