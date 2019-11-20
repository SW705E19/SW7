import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../../containers/NotFound/NotFound';
import Login from '../../components/Login/Login';
import AdminDashboard from '../../containers/AdminDashboard/AdminDashboard';
import ShowUser from '../../components/ShowUser/ShowUser';
import ShowService from '../../components/ShowService/ShowService';
import Header from '../../components/Header/Header';

function Layout() {
	const routing = (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/admin" component={AdminDashboard} />
				<Route path="/user/:id" component={ShowUser} />
				<Route path ="/service/:id" component={ShowService}/>
				<Route component={NotFound} />
			</Switch>
		</Router>
	);

  const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar
  }));

  const classes = useStyles();

	return (
		<>
			<Header />
			<div className={classes.appBarSpacer} />
			<Container component="main" maxWidth="sm" p={8}>
				{routing}
			</Container>
		</>
	);
}

export default Layout;
