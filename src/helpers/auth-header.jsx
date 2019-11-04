import { authenticationService } from './services/authentication/authenticationService';

export function authHeader() {
	// returns authorization of logged in user, or empty object if not logged in.
	const currentUser = authenticationService.currentUserValue;
	if (currentUser && currentUser.token) {
		return { Authorization: `Bearer ${currentUser.token}` };
	} else {
		return {};
	}
}