import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/vehica-logo.png';
import auth from '../../firebase.init';
import './Menubar.css';


const Menubar = () => {

  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

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
              {
                user && <>
                  <Nav.Link as={Link} to="/manageInventory">Manage Inventory</Nav.Link>
                  <Nav.Link as={Link} to="/addInventoryItem"> Add Inventory Item </Nav.Link>
                  <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                </>
              }
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              {
                user ?
                  <button type="button" onClick={logout} class="menu-sign-out-button">Sign Out</button>
                  :
                  <Nav.Link as={Link} to="/signIn">Sign In</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;