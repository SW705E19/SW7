import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from '../../containers/LandingPage/LandingPage';
import NotFound from '../../containers/NotFound/NotFound';

function Layout() {
	const routing = (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={LandingPage} />
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
