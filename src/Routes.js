import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Homepage from "./pages/Homepage";
import ExerciseBuilder from "./pages/ExerciseBuilder";


import UserContext from "./context/UserContext";

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/exerciseBuilder" component={ExerciseBuilder} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/homepage" exact>
        {user.token ? <Homepage /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default Routes;
