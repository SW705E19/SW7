import { authHeader, handleResponse } from '../../helpers';

export const ratingService = {
	getAll,
	create,
};

function create(rating) {
	rating = JSON.stringify(rating);
	const requestOptions = { method: 'POST', 
		headers: authHeader(),
		body: rating};
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/ratings/`, requestOptions)
		.then(handleResponse);
}


function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader()};
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/ratings/`, requestOptions)
		.then(handleResponse)
		.then(ratings => {
			return JSON.parse(ratings);
		});		
}