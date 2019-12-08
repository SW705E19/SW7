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
import CreateUser from '../../components/CreateUser/CreateUser';
import CreateService from '../../containers/CreateService/CreateService';
<<<<<<< HEAD
import GiveTutorRole from '../../components/GiveTutorRole/GiveTutorGetUsers';
=======
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';
>>>>>>> develop

function Layout() {
	const changeLanguage = (e) => {
		const lng = e.target.value;
		i18n.changeLanguage(lng);
	};

	const routing = (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/admin" component={AdminDashboard} />
				<Route path="/user/:id" component={ShowUser} />
				<Route path="/service/create" component={CreateService} />
				<Route path ="/service/:id" component={ShowService}/>
				<Route path ="/register" component={CreateUser} />
				<Route path ="/tutorRole" component={GiveTutorRole}/>
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
			<Header changeLanguage={changeLanguage}/>
			<div className={classes.appBarSpacer} />
			<Container component="main" maxWidth="md">
				{routing}
			</Container>
		</>
	);
}

export default withTranslation()(Layout);
