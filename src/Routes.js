import React, { useContext } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import UserContext from "./context/UserContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  const { user } = useContext(UserContext);
  return (
    <Switch>
      <Route path="/login">
        {user.token ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
      <Route path="/register">
        {user.token ? <Redirect to="/login" /> : <Register />}
      </Route>
      <Route path="/dashboard">
        {user.token ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default Routes;
