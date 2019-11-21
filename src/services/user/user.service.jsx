import { authHeader } from '../../helpers/auth-header';
import { handleResponse } from '../../helpers/handle-response';

export const userService = {
	getAll,
	getById,
	createUser
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(
		`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/users/`,
		requestOptions
	).then(handleResponse);
}

function getById(id) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(
		`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/users/${id}`,
		requestOptions
	).then(handleResponse);
}

function createUser(user) {
	user = JSON.stringify(user);
	const requestOptions = { method: 'POST', headers: authHeader(), body: user };
	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/auth/register/`,
		requestOptions
	).then(handleResponse);
}

export default userService;
