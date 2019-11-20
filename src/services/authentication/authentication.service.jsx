import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../../helpers/handle-response';
import * as jwt from 'jsonwebtoken';

const currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser'));

export const authenticationService = {
	login,
	logout,
	currentUser: currentUserSubject.asObservable(),
	get currentUserValue () { return currentUserSubject.value; },
	getCurrentUserId
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

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem('currentUser');
	currentUserSubject.next(null);
}

function getCurrentUserId() {
	const decodedToken = jwt.decode(localStorage.getItem('currentUser'));
	return decodedToken.userId;
}