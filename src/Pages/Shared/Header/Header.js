import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar
      collapseOnSelect
      sticky="top```"
      expand="lg"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="30" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#exparts">Exparts</Nav.Link>
            {user && (
              <>
                <Nav.Link href="/addservice">Add Service</Nav.Link>
                <Nav.Link href="/manage">Manage</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
              </>
            )}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

          <Nav>
            {user && <p className="mt-2 text-white">{user?.displayName}</p>}
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {user ? (
              <Nav.Link as={Link} onClick={() => signOut(auth)} to="/">
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
