import React, { useContext } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import UserContext from "./context/UserContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import ExerciseBuilder from "./pages/ExerciseBuilder";
import Homepage from "./pages/HomePage";

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
      <Route path="/homepage" exact>
        {user.token ? <Homepage /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/exerciseBuilder" component={ExerciseBuilder} />
    </Switch>
  );
};

export default Routes;
