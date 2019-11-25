import { authHeader } from '../../helpers/auth-header';
import { handleResponse } from '../../helpers/handle-response';

export const serviceService = {
	getAll,
	getById,
	getDetailedById,
	create,
	edit
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

function getDetailedById(serviceId) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/detail/${serviceId}`, requestOptions)
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
		.then(handleResponse)
		.then(service => {
			return JSON.parse(service);
		});
		
}

function edit(service) {
	const jsonService = JSON.stringify(service);
	const requestOptions = { method: 'PATCH', 
		headers: authHeader(),
		body: jsonService};
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/${service.id}`, requestOptions)
		.then(handleResponse);
}