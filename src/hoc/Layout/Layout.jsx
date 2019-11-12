import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFound from "../../containers/NotFound/NotFound";
import Login from "../../containers/Login/Login";
import Header from "../../components/Header/Header";
import CreateUser from "../../components/CreateUser/CreateUser";
import { UserForm } from "../../components/CreateUser/UserForm";

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
    </>
  );
}

export default Layout;
