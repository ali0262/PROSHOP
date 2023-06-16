import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>proShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  {" "}
                  <i>
                    <FaShoppingCart />
                  </i>{" "}
                  cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  {" "}
                  <i>
                    <FaUserAlt />
                  </i>{" "}
                  sign in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    <Outlet/>
    </>
  );
};

export default Header;
