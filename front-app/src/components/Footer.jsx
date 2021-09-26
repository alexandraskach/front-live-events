import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer class="text-center text-lg-start bg-light text-muted mt-2">
        <section class="d-flex justify-content-center p-4 border-bottom"></section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="fw-bold mb-4">Live Events</h6>
                <p>événementiel - tournées - promotion</p>
                <section class="justify-content-center">
                  <div>
                    <a href="#!" class="me-4 text-reset">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#!" class="me-4 text-reset">
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                    <a href="#!" class="me-4 text-reset">
                      <FontAwesomeIcon icon={faSnapchat} />
                    </a>
                    <a href="#!" class="me-4 text-reset">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#!" class="me-4 text-reset">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </section>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Général</h6>
                <p>
                  <a href="/actualites" class="text-reset">
                    Actualités
                  </a>
                </p>
                <p>
                  <a href="/concerts" class="text-reset">
                    Concerts
                  </a>
                </p>
                <p>
                  <a href="politique-de-confidentialite" class="text-reset">
                    Politique de confidentialité
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Liens utiles</h6>
                <p>
                  <a href="https://billetto.fr/" class="text-reset">
                    Billeterie
                  </a>
                </p>
                <p>
                  <a href="/faq" class="text-reset">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="/partenaires" class="text-reset">
                    Partenaires
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FontAwesomeIcon icon={faLocationArrow} /> Paris, France
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> contact@live-events.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> + 33 4 234 567 88
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> + 33 1 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            live-events.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
