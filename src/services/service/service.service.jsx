import { handleResponse } from '../../helpers/handle-response';
import { authHeader } from '../../helpers/auth-header';


export const serviceService = {
	getAll,
	getById
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://localhost:${process.env.REACT_APP_API_PORT}/api/services/${id}`, requestOptions).then(handleResponse);
}