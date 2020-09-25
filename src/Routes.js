import React, { useContext } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import UserContext from "./context/UserContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Workouts from "./pages/Workouts";
import ExerciseBuilder from "./pages/ExerciseBuilder";
import Homepage from "./pages/HomePage";
import ViewWorkout from "./pages/ViewWorkout";

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/">
        {user.token ? <Redirect to="/homepage" /> : <Login />}
      </Route>
      <Route exact path="/login">
        {user.token ? <Redirect to="/homepage" /> : <Login />}
      </Route>
      <Route exact path="/register">
        {user.token ? <Redirect to="/login" /> : <Register />}
      </Route>
      <Route exact path="/exerciseBuilder">
        {user.token ? <ExerciseBuilder /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/workouts">
        {user.token ? <Workouts /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/view-workouts/:id">
        {user.token ? <ViewWorkout /> : <Redirect to="/login" />}
      </Route>
      <Route path="/homepage" exact>
        {user.token ? <Homepage /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default Routes;
