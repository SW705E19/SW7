import { authHeader } from '../../helpers/auth-header';
import { handleResponse } from '../../helpers/handle-response';

export const categoryService = {
	getAll,
	getById,
	create,
	archive,
	update
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader()};
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/categories/`, requestOptions)
		.then(handleResponse)
		.then(categories => {
			return JSON.parse(categories);
		});
		
}

function getById(categoryId) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/categories/${categoryId}`, requestOptions)
		.then(handleResponse);
}

function create(category) {
	category = JSON.stringify(category);
	const requestOptions = { method: 'POST', 
		headers: authHeader(),
		body: category};
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/categories/`, requestOptions)
		.then(handleResponse)
		.then(category => {
			return JSON.parse(category);
		});
}

function archive(categoryId) {

}

function update(category) {

}