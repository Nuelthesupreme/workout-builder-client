import React, { useContext } from "react";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import UserContext from "../context/UserContext";

const ProtectedRoutes = () => {
  const { setUser } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/homepage">
        <Navbar.Brand>Workout-Tracker</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/homepage">
          <Nav.Link>Homepage</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/workouts">
          <Nav.Link>Workouts</Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={() => setUser({})}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default ProtectedRoutes;
