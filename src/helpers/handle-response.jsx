import { authenticationService } from '../services/authentication/authentication.service';

//Checks a response and checks it. It parses the JSON data and checks for the status.
//If 401 or 403 it logs the user out. If there is an error it returns error message and if success the data is returned as JSON object.
export default function handleResponse(response) {
	return response.text().then(text => {
		const data = text;
		if (!response.ok) {
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
