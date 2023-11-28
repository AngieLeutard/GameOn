function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
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
}

// Input FirstName

let inputFirstName = document.getElementById("first");
let inputFirstNameValue = "";
let FirstNameError = document.getElementById("textErrorFirst");


inputFirstName.addEventListener("change", (e) => {
  inputFirstNameValue = e.target.value;
  if (inputFirstNameValue === null || inputFirstNameValue === "") {
    FirstNameError.style.display = "block";
    inputFirstName.classList.add("error-text-control");
    inputFirstName.classList.remove("valid-text-control");
  } else {
    FirstNameError.style.display = "none";
    inputFirstName.classList.add("valid-text-control");
  }
  return inputFirstNameValue;
});

// Input LastName

let inputLastName = document.getElementById("last");
let inputLastNameValue = "";
let LastNameError = document.getElementById("textErrorLast");


inputLastName.addEventListener("change", (e) => {
  inputLastNameValue = e.target.value;
  if (inputLastNameValue === null || inputLastNameValue === "") {
    LastNameError.style.display = "block";
    inputLastName.classList.add("error-text-control");
    inputLastName.classList.remove("valid-text-control");
  } else {
    LastNameError.style.display = "none";
    inputLastName.classList.add("valid-text-control");
  }
  return inputLastNameValue;
});

// Input Email

let inputEmail = document.getElementById("email");
let inputEmailValue = "";
let EmailError = document.getElementById("textErrorEmail");


inputEmail.addEventListener("change", (e) => {
  inputEmailValue = e.target.value;
  if (inputEmailValue === null || inputEmailValue === "") {
    EmailError.style.display = "block";
    inputEmail.classList.add("error-text-control");
    inputEmail.classList.remove("valid-text-control");
  } else {
    EmailError.style.display = "none";
    inputEmail.classList.add("valid-text-control");
  }
  return inputEmailValue;
});

// Input Birthdate

let inputBirthdate = document.getElementById("date");
let inputBirthdateValue = "";
let BirthdateError = document.getElementById("textErrorDate");

inputBirthdate.addEventListener("change", (e) => {
  inputBirthdateValue = e.target.value;
  if (inputBirthdateValue === null || inputBirthdateValue === "") {
    BirthdateError.style.display = "block";
    inputBirthdate.classList.add("error-text-control");
    inputBirthdate.classList.remove("valid-text-control");
  } else {
    BirthdateError.style.display = "none";
    inputBirthdate.classList.add("valid-text-control");
  }
  return inputBirthdateValue;
});

// Input Quantity

let inputQuantity = document.getElementById("quantity");
let inputQuantityValue = "";
let QuantityError = document.getElementById("textErrorQuantity");


inputQuantity.addEventListener("change", (e) => {
  inputQuantityValue = e.target.value;
  if (inputQuantityValue === null || inputQuantityValue === "") {
    QuantityError.style.display = "block";
    inputQuantity.classList.add("error-text-control");
    inputQuantity.classList.remove("valid-text-control");
  } else {
    QuantityError.style.display = "none";
    inputQuantity.classList.add("valid-text-control");
  }
  return inputQuantityValue;
});




// [...allInputs].forEach((input) => input.addEventListener("change", (e) => {
//   allInputsValue = e.target.value;
//   console.log(allInputsValue);
//   return allInputsValue;
// }));

// if (inputJs === null || inputJs === "") {
//   [...errorMessages].forEach((errorMessage) => {
//     errorMessage.style.display = "block";
//   });
//   input.classList.add("error-text-control");
// } else {
//   form.style.display = "none";
//   successMessage.style.display = "block";
//   btnClose.style.display = "block";
// }
// if (inputFirstNameValue != null || inputFirstNameValue != "", inputLastNameValue != null || inputLastNameValue != "", inputEmailValue != null || inputEmailValue != "", inputBirthdateValue != null || inputBirthdateValue != "", inputQuantityValue != null || inputQuantityValue != "") {
//     inputJs === false
// }

// console.log(inputJs)


// Submit Event

submitBtn.forEach((btn) => btn.addEventListener("click", validate));

let allInputs = document.querySelectorAll(".js-input");
let allInputsValue = "";

[...allInputs].forEach((input) => input.addEventListener("submit", (e) => {
  allInputsValue = e.target.value;
  console.log(allInputsValue);
  return allInputsValue;
}));

function validate() {
  [...allInputs].forEach((input) => {
        if (allInputsValue === null || allInputsValue === "") {
          [...errorMessages].forEach((errorMessage) => {
            errorMessage.style.display = "block";
          });
          input.classList.add("error-text-control");
        } else {
          form.style.display = "none";
          successMessage.style.display = "block";
          btnClose.style.display = "block";
        }
  });
}

// Submit Function



// function validate() {
//   [...inputs].forEach((input) => {
//     if (inputJs === null || inputJs === "") {
//       [...errorMessages].forEach((errorMessage) => {
//         errorMessage.style.display = "block";
//       });
//       input.classList.add("error-text-control");
//     } else {
//       form.style.display = "none";
//       successMessage.style.display = "block";
//       btnClose.style.display = "block";
//     }
//   });
// }

// [...errorMessages].forEach((errorMessage) => {
//   errorMessage.style.display = "block";
// });
// [...inputs].forEach((input) => {
//   input.classList.add("error-text-control");
// });

// // Stop refereshing event

form.addEventListener('submit', stopRefresh);

// // Stop refreshing function

function stopRefresh(e) {
  e.preventDefault();
}