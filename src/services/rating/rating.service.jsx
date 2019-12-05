import { authHeader } from '../../helpers/auth-header';
import { handleResponse } from '../../helpers/handle-response';

export const ratingService = {
	getAverageRating,
};

function getAverageRating(serviceId) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/ratings/avg/${serviceId}`, requestOptions)
		.then(handleResponse).then(rating => {
			return JSON.parse(rating);
		});

}
