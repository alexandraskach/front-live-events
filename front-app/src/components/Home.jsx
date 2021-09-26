import React, { Component } from "react";
// import { Container } from "react-bootstrap";
import { Carousel, Container, Row, Card, Button, Alert } from "react-bootstrap";
import banner from "../images/banner.jpg";
import "./Home.css";
import timeago from "timeago.js";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Alert
            className="text-center"
            variant="danger"
            style={{ borderRadius: "none!important" }}
          >
            ALERTE METEO: Des averses orageuses attendues le 14.07
          </Alert>
          <Container>
            <h2 className=" pt-5 title text-center">
              Programme de Nation Sounds
            </h2>{" "}
            <br />
            <h3 className="title text-center">1 jour</h3>
            <Row>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Babymetal</Card.Title>
                  <Card.Text>Metal</Card.Text>
                  <Card.Text>Scène 1</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Akhenaton</Card.Title>
                  <Card.Text>Rap</Card.Text>
                  <Card.Text>Scène 2</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Scooter</Card.Title>
                  <Card.Text>Techno</Card.Text>
                  <Card.Text>Scène 3</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Kendji</Card.Title>
                  <Card.Text>Pop</Card.Text>
                  <Card.Text>Scène 4</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Kyo</Card.Title>
                  <Card.Text>Rock</Card.Text>
                  <Card.Text>Scène 5</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
            </Row>
            <h3 className="title text-center">2 jour</h3>
            <Row>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Babymetal</Card.Title>
                  <Card.Text>Metal</Card.Text>
                  <Card.Text>Scène 1</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Akhenaton</Card.Title>
                  <Card.Text>Rap</Card.Text>
                  <Card.Text>Scène 2</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Scooter</Card.Title>
                  <Card.Text>Techno</Card.Text>
                  <Card.Text>Scène 3</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Kendji</Card.Title>
                  <Card.Text>Pop</Card.Text>
                  <Card.Text>Scène 4</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Kyo</Card.Title>
                  <Card.Text>Rock</Card.Text>
                  <Card.Text>Scène 5</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
            </Row>
            <h3 className="title text-center">3 jour</h3>
            <Row>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Babymetal</Card.Title>
                  <Card.Text>Metal</Card.Text>
                  <Card.Text>Scène 1</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Akhenaton</Card.Title>
                  <Card.Text>Rap</Card.Text>
                  <Card.Text>Scène 2</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Scooter</Card.Title>
                  <Card.Text>Techno</Card.Text>
                  <Card.Text>Scène 3</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Kendji</Card.Title>
                  <Card.Text>Pop</Card.Text>
                  <Card.Text>Scène 4</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="p-2 m-2">
                <Card.Body>
                  <Card.Title>Kyo</Card.Title>
                  <Card.Text>Rock</Card.Text>
                  <Card.Text>Scène 5</Card.Text>
                  <Card.Text>14/07/21, 22:00</Card.Text>
                  <Button
                    className="button-colored"
                    href="/concerts/1"
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
            </Row>
            <h2 className=" pt-5 title text-center">
              Réserve ta place dès maintenant !
              <span className="pt-2 text-center">👇👇👇</span>
            </h2>
            <div className="text-center">
              <Button
                className="button-colored mt-4 mb-4"
                href="/concerts/1"
                variant="primary"
              >
                RESERVER
              </Button>
            </div>
          </Container>
        </div>
        <iframe
          title="carte"
          width="100%"
          height="500px"
          frameborder="0"
          allowfullscreen
          src="//umap.openstreetmap.fr/fr/map/nation-sounds_556095?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"
        ></iframe>
      </div>
    );
  }
}

export default Home;
