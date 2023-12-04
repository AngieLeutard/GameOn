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
let emailVerif = ""


inputEmail.addEventListener("change", (e) => {
  inputEmailValue = e.target.value;
  if (inputEmailValue.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm)) {
    EmailError.style.display = "none";
    inputEmail.classList.add("valid-text-control");
    emailVerif = true
  } else {
    EmailError.style.display = "block";
    inputEmail.classList.add("error-text-control");
    inputEmail.classList.remove("valid-text-control");
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

// Input Checkbox1 CGV

let inputCheckbox1 = document.querySelector("input[name=checkbox1]");
let inputCheckbox1Value = true;
let checkbox1Error = document.getElementById("textErrorCheckbox1");


inputCheckbox1.addEventListener("change", function() {
  if (this.checked) {
    checkbox1Error.style.display = "none";
    inputCheckbox1Value = true;
  } else {
    checkbox1Error.style.display = "block";
    inputCheckbox1Value = false;
  }
  return inputCheckbox1Value;
});

// Input Checkbox Location

let inputCheckboxLocation = document.querySelectorAll("input[name=location]");
let inputCheckboxLocationValue = false;
let checkboxLocationError = document.getElementById("textErrorCheckboxLocation");
checkboxLocationError.style.display = "block";

let locationNY = document.getElementById("location1");
let locationSF = document.getElementById("location2");
let locationS = document.getElementById("location3");
let locationC = document.getElementById("location4");
let locationB = document.getElementById("location5");
let locationP = document.getElementById("location6");

[...inputCheckboxLocation].forEach((location) => location.addEventListener("change", function() {
    if (locationNY.checked) {
      checkboxLocationError.style.display = "none";
      inputCheckboxLocationValue = true;
      console.log("coché")
    } 
    if (locationSF.checked) {
      checkboxLocationError.style.display = "none";
      inputCheckboxLocationValue = true;
    } 
    if (locationS.checked) {
      checkboxLocationError.style.display = "none";
      inputCheckboxLocationValue = true;
    } 
    if (locationC.checked) {
      checkboxLocationError.style.display = "none";
      inputCheckboxLocationValue = true;
    } 
    if (locationC.checked) {
      checkboxLocationError.style.display = "none";
      inputCheckboxLocationValue = true;
    } 
    if (locationB.checked) {
      checkboxLocationError.style.display = "none";
      inputCheckboxLocationValue = true;
    } 
    if (locationP.checked) {
      checkboxLocationError.style.display = "none";
      inputCheckboxLocationValue = true;
    } 
}));

// Submit Event

submitBtn.forEach((btn) => btn.addEventListener("click", validate));

// Submit Function

let allInputs = document.querySelectorAll(".js-input");
let allInputsValue = "";

function validate() {
  [...allInputs].forEach((input) => {
    let isValid = true
        if (inputFirstNameValue === null || inputFirstNameValue === "") {
          FirstNameError.style.display = "block";
          input.classList.add("error-text-control");
          isValid = false;
        }
        if (inputLastNameValue === null || inputLastNameValue === "") {
          LastNameError.style.display = "block";
          input.classList.add("error-text-control");
          isValid = false;
        }  
        if (emailVerif != true) {
          EmailError.style.display = "block";
          input.classList.add("error-text-control");
          isValid = false;
        }
        if (inputBirthdateValue === null || inputBirthdateValue === "") {
          BirthdateError.style.display = "block";
          input.classList.add("error-text-control");
          isValid = false;
        }
        if (inputQuantityValue === null || inputQuantityValue === "") {
          QuantityError.style.display = "block";
          input.classList.add("error-text-control");
          isValid = false;
        }
        if (inputCheckbox1Value != true) {
          checkbox1Error.style.display = "block";
          isValid = false;
        }
        if (inputCheckboxLocationValue != true) {
          checkboxLocationError.style.display = "block";
          isValid = false;
        }  
        if (isValid) {
          form.style.display = "none";
          successMessage.style.display = "block";
          btnClose.style.display = "block";
        }
  });
}

// // Stop refereshing event

form.addEventListener('submit', stopRefresh);

// // Stop refreshing function

function stopRefresh(e) {
  e.preventDefault();
}