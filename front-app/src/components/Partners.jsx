import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../index.css";

class Partners extends Component {
  render() {
    return (
      <section class="section section-default mt-none mb-none">
        <div class="container">
          <h2 class="mb-sm">Nos partenaires</h2>
          <strong>
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQHDJkayJuRQyw/company-logo_200_200/0/1579213130202?e=2159024400&v=beta&t=nL5_LBt35Ti1hbgkRqPCNVJz2bohU46VY56D3sGDVoU"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://www.color-stickers.com/2182-large_default/stickers-logo-monster-energy.jpg"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/26/3b/30/263b3088-e6e8-e1e1-a861-c9ca384e841a/source/256x256bb.jpg"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://cdn.1min30.com/wp-content/uploads/2019/07/Logo-credit-mutuel-une.png"
                  />
                </div>
              </div>
            </div>
          </strong>
        </div>
      </section>
    );
  }
}

export default Partners;
