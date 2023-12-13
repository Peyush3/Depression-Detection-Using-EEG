import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <div className="Navi nav-style">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">CogniMind</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"/profile"}>
                Profile
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="success" as={Link} to={"/login"}>
                Login
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
