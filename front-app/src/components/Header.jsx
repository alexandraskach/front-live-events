import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Spinner from "./Spinner";

class Header extends Component {
  renderUser() {
    const { userData, logout } = this.props;
    if (null === userData) {
      return <Spinner></Spinner>;
    }

    return (
      <Nav>
        <Nav.Link href="#">Bonjour {userData.name}</Nav.Link>
        <Nav.Link href="#" onClick={logout}>
          Deconnexion
        </Nav.Link>
      </Nav>
    );
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">Live Events</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/actualites">Actualités</Nav.Link>
              {!isAuthenticated && (
                <Nav.Link href="/register">Créer un compte</Nav.Link>
              )}
              {isAuthenticated ? (
                this.renderUser()
              ) : (
                <Nav.Link href="/connexion">Se connecter</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
