import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css"; // Example import

const Navigation = () => {
  const linkStyleOverride = { color: "black" };

  return (
    <Navbar
      collapseOnSelect
      className="p-2"
      expand="lg"
      bg="white"
      variant="light"
    >
      <Navbar.Brand href="/homepage">Master Builder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <NavLink activeStyle={linkStyleOverride} to="/login">
              Login
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink activeStyle={linkStyleOverride} to="/signup">
              Signup
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink activeStyle={linkStyleOverride} to="/homepage">
              Homepage
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
