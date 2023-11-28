function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelectorAll(".js-btn-submit");
const successMessage = document.querySelector(".successMessage");
const btnClose = document.querySelector(".modal-close");

// let inputFirst = document.getElementById("first");
// let inputLast = document.getElementById("last");
// let inputEmail = document.getElementById("email");
// let inputDate = document.getElementById("birthdate");
// let inputAnswer = document.getElementById("quantity");

let inputs = document.querySelectorAll(".js-input");

let errorInputFirst = document.querySelector("#errorFirst");
let errorInputLast = document.querySelector("#errorLast");
let errorInputEmail = document.querySelector("#errorEmail");
let errorInputDate = document.querySelector("#errorDate");
let errorInputAnswer = document.querySelector("#errorAnswer");
// let errorMessageFirst = document.querySelector(".errorMessageFirst");
// let errorMessageLast = document.querySelector(".errorMessageLast");
// let errorMessageEmail = document.querySelector(".errorMessageEmail");
// let errorMessageDate = document.querySelector(".errorMessageDate");
// let errorMessageAnswer = document.querySelector(".errorMessageAnswer");

let errorInput = document.querySelectorAll("#errorFirst");
let errorMessages = document.querySelectorAll(".errorMessage");


let form = document.querySelector("#form");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  location.reload();
}

// Input value event

let inputFirstValue = "";
let inputLastValue = "";
let inputEmailValue = "";
let inputDateValue = "";
let inputAnswerValue = "";

let inputJs = "";

console.log(inputs);
console.log(...inputs);
console.log([...inputs]);
console.log([inputs[0], inputs[1], inputs[2], inputs[3], inputs[4]]);


[...inputs].forEach((input) => {
  input.addEventListener("change", (event) => {
    inputJs = event.target.value;
    console.log(inputJs);
    return inputJs;
  })
});



// if (input) {
//   input.addEventListener("change", (event) => {
//     inputJs = event.target.value;
//     console.log(inputJs);
//     return inputJs;
//   })
// }

// if (inputFirst) {
//   inputFirst.addEventListener("change", (event) => {
//     inputFirstValue = event.target.value;
//     console.log(inputFirstValue);
//     return inputFirstValue;
//   })
// }

// if (inputLast) {
//   inputLast.addEventListener("change", (event) => {
//     inputLastValue = event.target.value;
//     console.log(inputLastValue);
//     return inputLastValue;
//   })
// }

// if (inputEmail) {
//   inputEmail.addEventListener("change", (event) => {
//     inputEmailValue = event.target.value;
//     console.log(inputEmailValue);
//     return inputEmailValue;
//   })
// }

// if (inputDate) {
//   inputDate.addEventListener("change", (event) => {
//     inputDateValue = event.target.value;
//     console.log(inputDateValue);
//     return inputDateValue;
//   })
// }

// if (inputAnswer) {
//   inputAnswer.addEventListener("change", (event) => {
//     inputAnswerValue = event.target.value;
//     console.log(inputAnswerValue);
//     return inputAnswerValue;
//   })
// }

// Submit Function

function validate() {

  if (inputJs === null || inputJs === "") {
    [...errorMessages].forEach((errorMessage) => {
      errorMessage.style.display = "block";
    });
    [...inputs].forEach((input) => {
      input.classList.add("error-text-control")
    });

    // errorMessage.style.display = "block";
    // errorInput.dataset.errorVisible = "true";
  } else {
    form.style.display = "none";
    successMessage.style.display = "block";
    btnClose.style.display = "block";
  }

  
  // if (inputFirstValue === null || inputFirstValue === "") {
  //   errorMessageFirst.style.display = "block";
  //   errorInputFirst.dataset.errorVisible = "true";
  // }

  // else if (inputLastValue === null || inputLastValue === "") {
  //   errorMessageLast.style.display = "block";
  //   errorInputLast.dataset.errorVisible = "true";
  // }
  
  // else if (inputEmailValue === null || inputEmailValue === "") {
  //   errorMessageEmail.style.display = "block";
  //   errorInputEmail.dataset.errorVisible = "true";
  // }

  // else if (inputDateValue === null || inputDateValue === "") {
  //   errorMessageDate.style.display = "block";
  //   errorInputDate.dataset.errorVisible = "true";
  // }

  // else if (inputAnswerValue === null || inputAnswerValue === "") {
  //   errorMessageAnswer.style.display = "block";
  //   errorInputAnswer.dataset.errorVisible = "true";
  // }
}

// Stop refereshing event

form.addEventListener('submit', stopRefresh);

// Stop refreshing function

function stopRefresh(e) {
  e.preventDefault();
}