import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

import { HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserContext from "./context/UserContext";
import Routes from "./Routes";

export const App = () => {
  const [user, setUser] = useState({});

  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Container fluid>
          <Navigation />
          <Routes />
        </Container>
      </UserContext.Provider>
    </HashRouter>
  );
};
