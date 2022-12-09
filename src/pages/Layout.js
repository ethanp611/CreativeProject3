import { Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'
import React from 'react'

const Layout = () => {
  return (
      <><Navbar bg="black" variant="dark" expand="lg">
      <Navbar.Brand id="navbar-brand" href="/">BongoBoys</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav classname="nav-controls">
          <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link >About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/request">
            <Nav.Link >Request a Show</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tour">
            <Nav.Link >Tour Schedule</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Outlet />
    </>
  )
};

export default Layout;