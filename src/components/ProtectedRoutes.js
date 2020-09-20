import React, { useContext } from "react";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { Link } from "react-router-dom";

import UserContext from "../context/UserContext";

const ProtectedRoutes = () => {
  const { setUser } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/dashboard">
        <Navbar.Brand>Workout-Tracker</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </Link>
        <Nav.Link onClick={() => setUser({})}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default ProtectedRoutes;
