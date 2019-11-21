import validator from 'validator';

function notEmptyValidation(input) {
	return !validator.isEmpty(input);
}

function emailValidation(email) {
	return validator.isEmail(email);
}

function phoneNumberValidation(phoneNumber) {
	if (phoneNumber === undefined) {
		return false;
	}
	return validator.isMobilePhone(phoneNumber);
}

// This function is taken from stack overflow here:
// https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
function dateOfBirthValidation(dateOfBirth) {
	let parts = dateOfBirth.split('-');
	let year = parseInt(parts[0], 10);
	let month = parseInt(parts[1], 10);
	let day = parseInt(parts[2], 10);

	let thisYear = new Date();
	if (year < 1910 || year > thisYear.getFullYear() || month === 0 || month > 12)
		return false;

	let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
		monthLength[1] = 29;

	return day > 0 && day <= monthLength[month - 1];
}

function validPassword(firstPassword, secondPassword) {
	let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
	console.log(firstPassword);
	console.log(secondPassword);
	if (firstPassword !== secondPassword) {
		return false;
	}
	return re.test(firstPassword);
}

export {
	notEmptyValidation,
	emailValidation,
	phoneNumberValidation,
	dateOfBirthValidation,
	validPassword
};
