import { authHeader, handleResponse } from '../../helpers';

export const serviceService = {
	getAll,
	getRandomImage
};

function getAll(){
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/`, requestOptions)
		.then(handleResponse)
		.then(services => {
			return JSON.parse(services);
		});
}

function getRandomImage(){
	return fetch('https://picsum.photos/200/500')
		.then( res => res);
}
