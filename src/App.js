import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import Routes from "./Routes";
import Navigation from "./components/Navigation/Navigation";

import UserContext from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Container
          className="App"
          style={{ height: "calc(100vh - 40px - 16px)" }}
        >
          <Navigation />

          <Routes />
        </Container>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
