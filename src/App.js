import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import UserContext from "./UserContext";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Container
        className="App"
        style={{ height: "calc(100vh - 40px - 16px)" }}
      >
        <HashRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </HashRouter>
      </Container>
    </UserContext.Provider>
  );
};

export default App;
