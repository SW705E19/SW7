import { authHeader } from '../../helpers/auth-header';
import { handleResponse } from '../../helpers/handle-response';

export const userService = {
	getAll,
	getById,
	getOwnUser,
	getTutorInfoByUserId,
	editUser,
	deleteUser
};

function editUser(id, user) {
	const requestOptions = {
		method: 'PATCH',
		headers: authHeader(),
		body: JSON.stringify(user)
	};
	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/${id}`,
		requestOptions
	).then(handleResponse);
}

function deleteUser(id) {
	const requestOptions = { method: 'DELETE', headers: authHeader() };
	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/${id}`,
		requestOptions
	).then(handleResponse);
}

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/`,
		requestOptions
	).then(handleResponse);
}

function getById(id) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/${id}`,
		requestOptions
	)
		.then(handleResponse)
		.then(data => {
			return JSON.parse(data);
		});
}

function getOwnUser() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/profile`,
		requestOptions
	)
		.then(handleResponse)
		.then(data => {
			return JSON.parse(data);
		});
}

function getTutorInfoByUserId(userId) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/tutorInfo/${userId}`,
		requestOptions
	)
		.then(handleResponse)
		.then(data => {
			return JSON.parse(data);
		});
}
