import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import Routes from "./Routes";

import UserContext from "./context//UserContext";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Container
        className="App"
        style={{ height: "calc(100vh - 40px - 16px)" }}
      >
        <HashRouter>
          <Routes />
        </HashRouter>
      </Container>
    </UserContext.Provider>
  );
};

export default App;
