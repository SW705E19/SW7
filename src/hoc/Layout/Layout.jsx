import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../../containers/NotFound/NotFound';
import Login from '../../containers/Login/Login';
import AdminDashboard from '../../containers/AdminDashboard/AdminDashboard';
import Header from '../../components/Header/Header';
import { Container } from '@material-ui/core';

function Layout() {
	const routing = (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/admin" component={AdminDashboard} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);

	return (
		<>
			<Header />
			<Container component="main" maxWidth="sm">
				{routing}
			</Container>
		</>
	);
}

export default Layout;
