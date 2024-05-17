import { Link, Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";

const RootLayout = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/LandingPage">Affinity</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="/LandingPage">Landing Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dating">Affinity</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Horoscope">Horoscope Page</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default RootLayout;
