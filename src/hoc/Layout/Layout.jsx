import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../../containers/NotFound/NotFound';
import Login from '../../containers/Login/Login';

function Layout() {
	const routing = (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);

	return (
		<>
			<div>Toolbar</div>
			<div>Sidedrawer</div>
			<div>Backdrop</div>
			<div>
				{routing}
			</div>

			<div>Footer</div>
		</>
	);
}

export default Layout;
