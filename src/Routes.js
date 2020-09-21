import React, { useContext } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import UserContext from "./context/UserContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Library from "./pages/Library";

const Routes = () => {
  const { user } = useContext(UserContext);
  return (
    <Switch>
      <Route exact path="/login">
        {user.token ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
      <Route exact path="/register">
        {user.token ? <Redirect to="/login" /> : <Register />}
      </Route>
      <Route exact path="/dashboard">
        {user.token ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/workouts">
        {user.token ? <Workouts /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/library" component={Library} />
    </Switch>
  );
};

export default Routes;
