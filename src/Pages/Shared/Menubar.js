import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/vehica-logo.png';
import './Menubar.css';


const Menubar = () => {
  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height="50" alt="vehica-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/manageInventories">Manage Inventories</Nav.Link>
              <Nav.Link as={Link} to="/">
                Add Item</Nav.Link>
              <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
              <Nav.Link as={Link} to="/signIn">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;