import React from "react";
import { Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";

function spinner() {
  return (
    <div>
      <Container>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
      </Container>
    </div>
  );
}

export default spinner;
