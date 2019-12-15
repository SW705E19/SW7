import { authHeader, handleResponse } from '../../helpers';

export const ratingService = {
	getAll,
	create,
	getAverageRating,
	GetTopAverageServices
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
        
function getAverageRating(serviceId) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/ratings/avg/${serviceId}`, requestOptions)
		.then(handleResponse).then(rating => {
			return JSON.parse(rating);
		});
}

function GetTopAverageServices(){
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/ratings/avg`, requestOptions)
		.then(handleResponse).then(services => JSON.parse(services));
}
