import { handleResponse } from '../../helpers/handle-response';
import { authHeader } from '../../helpers/auth-header';

export const userService = {
	getAll,
	getById
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/`, requestOptions)
		.then(handleResponse)
		.then(users => {
			return JSON.parse(users);
		});
}

function getById(id) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/${id}`, requestOptions)
		.then(handleResponse)
		.then(user => {
			return JSON.parse(user);
		});
}