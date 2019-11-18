import { authHeader, handleResponse } from '@/helpers';

export const serviceService = {
	getAll
};

function getAll(){
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/services/`, requestOptions).then(handleResponse);
}
