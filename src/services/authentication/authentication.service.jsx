import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../../helpers/handle-response';

const currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser'));

export const authenticationService = {
	login,
	logout,
	createUser,
	currentUser: currentUserSubject.asObservable(),
	get currentUserValue () { return currentUserSubject.value; }
};

function login(username, password) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	};

	return fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/auth/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			// store user details and jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem('currentUser', user);
			currentUserSubject.next(user);

			return user;
		});
}


function createUser(user) {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(user),
	};

	return fetch(
		`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/auth/register/`,
		requestOptions
	).then(handleResponse).then(user => {
		localStorage.setItem('currentUser', user);
	});
}


function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem('currentUser');
	currentUserSubject.next(null);
}