import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Spinner from "./Spinner";

function Concert(props) {
  const { concert, fetching } = props;

  if (fetching) {
    return <Spinner></Spinner>;
  }

  if (null === concert) {
    return <div>Concert n'existe pas</div>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Card style={{ width: "40rem" }}>
            <Card.Img
              variant="top"
              src={`http://localhost:8000${concert.images[0].url}`}
            />
            <Card.Body>
              <Card.Title>{concert.artiste}</Card.Title>
              <Card.Text>{concert.style}</Card.Text>
              <Card.Text>Scène :{concert.scene}</Card.Text>
              <Card.Text>
                {new Intl.DateTimeFormat("fr-FR", {
                  year: "2-digit",
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  // timeZone: "Europe/Paris",
                }).format(new Date(concert.date))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Concert;
