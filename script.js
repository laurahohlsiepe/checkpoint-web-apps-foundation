let inputOne = document.querySelector("#input1");
let inputTwo = document.querySelector("#input2");
let passwordBtn = document.querySelector("#password-btn");

passwordBtn.addEventListener("click", showPassword);
passwordBtn.addEventListener("click", changeButton);

inputOne.addEventListener("change", equalPasswords);
inputTwo.addEventListener("change", equalPasswords);

inputOne.addEventListener("change", lowerCase);
inputTwo.addEventListener("change", lowerCase);

inputOne.addEventListener("change", upperCase);
inputTwo.addEventListener("change", upperCase);

inputOne.addEventListener("change", checkForNumbers);
inputTwo.addEventListener("change", checkForNumbers);

inputOne.addEventListener("change", characterLength);
inputTwo.addEventListener("change", characterLength);

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
  let equal = document.querySelector("#equal");

  if (inputOne.value === inputTwo.value) {
    equal.innerHTML = "Passwords are equal ✅";
  } else {
    equal.innerHTML = "Passwords are equal ❌";
  }
}

function lowerCase() {
  let lowerCase = document.querySelector("#lower-case-letters");

  if (inputOne.value !== inputOne.value.toUpperCase()) {
    lowerCase.innerHTML = "Lower Case Letters ✅";
  } else {
    lowerCase.innerHTML = "Lower Case Letters ❌";
  }

  if (inputTwo.value !== inputTwo.value.toUpperCase()) {
    lowerCase.innerHTML = "Lower Case Letters ✅";
  } else {
    lowerCase.innerHTML = "Lower Case Letters ❌";
  }
}

function upperCase() {
  let upperCase = document.querySelector("#upper-case-letters");

  if (inputOne.value !== inputOne.value.toLowerCase()) {
    upperCase.innerHTML = "Upper Case Letters ✅";
  } else {
    upperCase.innerHTML = "Upper Case Letters ❌";
  }

  if (inputTwo.value !== inputTwo.value.toLowerCase()) {
    upperCase.innerHTML = "Upper Case Letters ✅";
  } else {
    upperCase.innerHTML = "Upper Case Letters ❌";
  }
}

function checkForNumbers() {
  let regex = /\d/;
  let numbers = document.querySelector("#contains-numbers");

  if (regex.test(inputOne.value) === true) {
    numbers.innerHTML = "Contains Numbers ✅";
  } else {
    numbers.innerHTML = "Contains Numbers ❌";
  }

  if (regex.test(inputTwo.value) === true) {
    numbers.innerHTML = "Contains Numbers ✅";
  } else {
    numbers.innerHTML = "Contains Numbers ❌";
  }
}

function characterLength() {
  let character = document.querySelector("#character-length");

  if (inputOne.value.length >= 10) {
    character.innerHTML = "At least 10 characters long ✅";
  } else {
    character.innerHTML = "At least 10 characters long ❌";
  }

  if (inputTwo.value.length >= 10) {
    character.innerHTML = "At least 10 characters long ✅";
  } else {
    character.innerHTML = "At least 10 characters long ❌";
  }
}
