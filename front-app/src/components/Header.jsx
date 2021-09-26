import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import Spinner from "./Spinner";
import logo from "../images/logo.png";

class Header extends Component {
  renderUser() {
    const { userData, logout } = this.props;
    if (null === userData) {
      return <Spinner></Spinner>;
    }

    return (
      <Nav>
        <NavDropdown title={`Bonjour ${userData.name}`} id="basic-nav-dropdown">
          <NavDropdown.Item href="/actualites-form">
            Ajouter un nouveau post
          </NavDropdown.Item>
          <NavDropdown.Item href="/concerts-form">
            Ajouter un nouveau concert
          </NavDropdown.Item>
          <NavDropdown.Item href="#" onClick={logout}>
            Deconnexion
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Navbar bg="light" expand="lg" className="mb-4 mt-2">
        <Container>
          <Navbar.Brand href="/" className="d-inline-block align-top">
            <img src={logo} alt="Live Events" width="60%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/actualites">Actualités</Nav.Link>
              <Nav.Link href="/concerts">Concerts</Nav.Link>
              <Nav.Link href="/partenaires">Partenaires</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
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
