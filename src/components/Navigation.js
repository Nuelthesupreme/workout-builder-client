import React, { useContext } from "react";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import UserContext from "../context/UserContext";
import ProtectedRoutes from "./ProtectedRoutes";

const Navigation = () => {
  const { user } = useContext(UserContext);

  if (user.token) {
    return <ProtectedRoutes />;
  }

  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/login">
        <Navbar.Brand>Workout-Tracker</Navbar.Brand>
      </LinkContainer>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register">
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
