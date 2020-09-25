import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

import { HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserContext from "./context/UserContext";
import Routes from "./Routes";

export const App = () => {
  // Create new variables to get the item and parse it from a json object
  const localUser = localStorage.getItem("user");
  const parsedLocalUser = JSON.parse(localUser);

  const [user, setUser] = useState(parsedLocalUser || {}); // This is where i put the user in state and where i can get the token.

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
