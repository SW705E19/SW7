import { authHeader , handleResponse} from '../../helpers';

export const userService = {
	getAll,
	getById,
	getOwnUser,
	getTutorInfoByUserId,
	editUser,
	editTutorRole,
	deleteUser
};

function editUser(userId ,user) {
	const requestOptions = {
		method: 'PATCH',
		headers: authHeader(),
		body: JSON.stringify(user)
	};
	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/${userId}`,
		requestOptions
	).then(handleResponse);
}

function editTutorRole(id, roles) {
	const jsonService = JSON.stringify(roles);

	const requestOptions = { method: 'PATCH', 
		headers: authHeader(),
		body: jsonService};
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/tutor/${id}`, requestOptions)
		.then(handleResponse);
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
	)
		.then(handleResponse)
		.then(data => {
			return JSON.parse(data);
		});
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
