import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFound from "../../containers/NotFound/NotFound";
import Login from "../../components/Login/Login";
import ShowUser from "../../components/ShowUser/ShowUser";
import Header from "../../components/Header/Header";
import { CreateUser } from "../../components/CreateUser/CreateUser";

function Layout() {
  const routing = (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user/:id" component={ShowUser} />
        <Route path="/createuser" component={CreateUser} />
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
      <CreateUser />
      <div className={classes.appBarSpacer} />
      <Container component="main" maxWidth="sm" p={8}>
        {routing}
      </Container>
    </>
  );
}

export default Layout;
