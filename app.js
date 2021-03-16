let errors = [];

const $ = (selector) => {
  return document.querySelector(selector);
};

const isValidLength = (field, value, length) => {
  if (value.length >= length) {
    return true;
  } else {
    errors.push(`${field} minumum length is ${length}`);
    return false;
  }
};

const isValidPayRate = function (value) {
  if (value != "" && !isNaN(value)) {
    if (value > 0) {
      return true;
    } else {
      errors.push("Payrate cannot be equal to or less than zero.");
      return false;
    }
  } else {
    errors.push("Payrate is not a valid number");
    return false;
  }
};

$('#submitEmployee').addEventListener('click', submitEmployee);

function submitEmployee() {
  errors = [];

  let errorsList = $('#errorsList');
  errorsList.innerHTML = '';

  let isValid = true;

  let firstName = $('#firstNameInput');
  let lastName = $('#lastNameInput');
  let payRate = $('#rateInput');

  // if (!isValidLength('First Name', firstName.value, 2)) isValid = false;
  // if (!isValidLength('Last Name', lastName.value, 2)) isValid = false;
  // if (!isValidPayRate(payRate.value)) isValid = false;

  isValid =
    !isValidLength('First Name', firstName.value, 2) &&
    !isValidLength('Last Name', lastName.value, 3) &&
    !isValidPayRate(payRate.value);

  console.log(isValid);
}
