import { authHeader } from '../helpers/auth-header';

export const categoryService = {
	getAll,
	getById,
	create,
	archive,
	update
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/categories/`, requestOptions);
		//.then(handleResponse);
}

function getById(categoryId) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/categories/${categoryId}`, requestOptions);
		//.then(handleResponse);
}

function create(category) {
	const requestOptions = { method: 'POST', 
		headers: authHeader(),
		body: JSON.stringify(category) };
	return fetch(`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/categories/`, requestOptions)
		//.then(handleResponse)
		.then(category => {
			return category;
		});
}

function archive(categoryId) {

}

function update(category) {

}