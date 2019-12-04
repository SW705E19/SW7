import { authHeader, handleResponse } from '../../helpers';

export const serviceService = {
	getAll,
	getById,
	create,
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader()};
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/`, requestOptions)
		.then(handleResponse)
		.then(services => {
			return JSON.parse(services);
		});
}

function getById(serviceId) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/${serviceId}`, requestOptions)
		.then(handleResponse)
		.then(service => {
			return JSON.parse(service);
		});
}

function create(service) {
	service = JSON.stringify(service);
	const requestOptions = { method: 'POST', 
		headers: authHeader(),
		body: service};
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/`, requestOptions)
		.then(handleResponse);
}
