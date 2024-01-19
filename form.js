// Getting DOM element
const form = document.getElementById("form");
const username = document.getElementById("username");
const e_mail = document.getElementById("e-mail");
const password = document.getElementById("password");
const password2 = document.getElementById("password-2");

// Showing  an error  message in input
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "ct-form error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// Showing in an success message in outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "ct-form success";
};

// Check Required Fields

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${input.id}, is required`);
    } else {
      showSuccess(input);
    }
  });
};

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

// Checking Password Matches

const checkingPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match.Check them again.");
  }
};

// Get field name
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Adding Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, e_mail, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkingPasswordMatch(password, password2);
});
