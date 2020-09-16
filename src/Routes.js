import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
