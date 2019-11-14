import React from 'react';
import Login from '../../containers/Login/Login';
import Header from '../../components/Header/Header';
import { UserForm } from '../../components/CreateUser/UserForm';

function Layout() {
	const routing = (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/createuser" component={UserForm} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);

	return (
		<>
			<Header />
			<UserForm />
			<div>Sidedrawer</div>
			<div>Backdrop</div>
			<div>{routing}</div>

			<div>Footer</div>
		</div>
	);
}

export default Layout;
