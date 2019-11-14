import { authHeader, handleResponse } from '@/helpers';

export const userService = {
	getAll,
	getById
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/users/`, requestOptions).then(handleResponse);
}

function getById(id) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/users/${id}`, requestOptions).then(handleResponse);
}