import validator from "validator";

function notEmptyValidation(input) {
  return !validator.isEmpty(input);
}

function emailValidation(email) {
  return validator.isEmail(email);
}

function phoneNumberValidation(phoneNumber) {
  return validator.isMobilePhone(phoneNumber);
}

// Fix this validator
function dateOfBirthValidation(dateOfBirth) {
  let today = new Date();
  return (
    validator.isBefore(dateOfBirth, today.getDate().toString()) &&
    validator.isAfter(dateOfBirth, "January 1, 1920")
  );
}

export {
  notEmptyValidation,
  emailValidation,
  phoneNumberValidation,
  dateOfBirthValidation
};
