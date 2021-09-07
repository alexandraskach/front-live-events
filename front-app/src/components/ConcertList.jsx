import React from "react";
import { Card } from "react-bootstrap";
import { Button, Badge } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import timeago from "timeago.js";
import Spinner from "./Spinner";
import "../index.css";

function ConcertList(props) {
  const { concerts, fetching } = props;

  if (fetching) {
    return <Spinner></Spinner>;
  }

  if (null === concerts || 0 === concerts.length) {
    return <div>Les concerts n'existent pas</div>;
  }

  return (
    <div>
      <Container>
        <h3 className="pb-3">Liste des concerts à venir :</h3>
        <div>
          <Badge bg="primary" className="m-1">
            Rock
          </Badge>
          <Badge bg="primary" className="m-1">
            Techno
          </Badge>
          <Badge bg="primary" className="m-1">
            Rap
          </Badge>
          <Badge bg="primary" className="m-1">
            Pop
          </Badge>
          <Badge bg="primary" className="m-1">
            Metal
          </Badge>
        </div>
        <Row>
          {concerts &&
            concerts.map((concert) => (
              <Card
                key={concert.id}
                style={{ width: "18rem" }}
                className="p-2 m-2"
              >
                <Card.Body>
                  <Card.Title>{concert.artiste}</Card.Title>
                  <Card.Text>Style: {concert.style}</Card.Text>
                  <Card.Text>Scène {concert.scene}</Card.Text>
                  <Card.Text>{concert.date}</Card.Text>
                  <Button
                    className="button-colored"
                    href={`/concerts/${concert.id}`}
                    variant="primary"
                  >
                    Voir plus
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default ConcertList;
