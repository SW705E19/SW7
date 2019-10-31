import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../../containers/NotFound/NotFound';
import Login from '../../containers/Login/Login';
import Header from '../../components/Header/Header';

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
			<Header />
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
