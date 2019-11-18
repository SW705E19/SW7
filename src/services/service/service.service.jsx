import { handleResponse } from '../../helpers/handle-response';
import { authHeader } from '../../helpers/auth-header';


export const serviceService = {
	getAll,
	getById
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/`, requestOptions)
		.then(handleResponse)
		.then(services => {
			return JSON.parse(services);
		});
}

function getById(id) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/${id}`, requestOptions)
		.then(handleResponse)
		.then(service => {
			return JSON.parse(service);
		});
}