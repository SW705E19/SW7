import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../../containers/NotFound/NotFound';

function Layout() {
	const routing = (
		<Router>
			<div>
				<Switch>
					<Route component={NotFound} />
				</Switch>
			</div>
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
