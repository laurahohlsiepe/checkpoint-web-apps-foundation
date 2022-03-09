let inputOne = document.querySelector("#input1");
let inputTwo = document.querySelector("#input2");
let passwordBtn = document.querySelector("#password-btn");

passwordBtn.addEventListener("click", showPassword);
passwordBtn.addEventListener("click", changeButton);
passwordBtn.addEventListener("click", equalPasswords);

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

function equalPasswords() {
  if (inputOne.value === inputTwo.value) {
    let equal = document.createElement("div");
    let equalText = document.createTextNode("Passwords are equal");
    equal.appendChild(equalText);

    let div = document.querySelector("#equal");
    div.appendChild(equal);
  } else {
    let equal = document.createElement("div");
    let equalText = document.createTextNode("Passwords are not equal");
    equal.appendChild(equalText);

    let div = document.querySelector("#equal");
    div.appendChild(equal);
  }
}
