import { authenticationService } from '../services/authentication/authentication.service';

export default function authHeader() {
	// returns authorization of logged in user, or empty object if not logged in.
	const token = authenticationService.currentUserValue;
	if (token) {
		return {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		};
	} else {
		return {};
	}
} 
