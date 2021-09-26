import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../index.css";

class PrivacyPolicy extends Component {
  render() {
    return (
      <Container>
        <h3 className="pb-3">Politique de confidentialité</h3>
        <p>
          Cette politique de confidentialité va vous aider à comprendre comment
          "Live Events" utilise et protège les données que vous nous fournissez
          lorsque vous visitez et utilisez live-events.com. Assurez-vous que
          vous êtes à jour avec les derniers changements, nous vous conseillons
          vous de visiter fréquemment cette page. Nous pouvons collecter les
          données suivantes : Vos coordonnées et votre adresse e-mail. Pourquoi
          nous recueillons votres données. Nous collectons vos données pour
          plusieurs raisons : Pour mieux comprendre vos besoins. Pour améliorer
          nos services et produits. Pour vous contacter pour remplir des
          sondages et participer à d'autres types d'études de marché.
        </p>
      </Container>
    );
  }
}

export default PrivacyPolicy;
