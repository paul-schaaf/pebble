import React from 'react';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Card from './helperComponents/card';

import './pricingSection.sass';
import Centrifier from './helperComponents/centrifier';

const PricingSection = ({ smallFishEmoji, mediumFishEmoji, bigFishEmoji }) => (
  <div className="pricing-section">
    <Container>
      <p className="pricing-section__heading">Pricing</p>
      <Centrifier>
        <div className="pricing-section__plan-box">
          <Card type="pricing">
            <div className="card--pricing__plan-name">
              Basic
              <span role="img" aria-label="basic plan emoji">
                <Img
                  alt="basic plan emoji"
                  fixed={smallFishEmoji.childImageSharp.fixed}
                />
              </span>
            </div>
            <p className="card--pricing__plan-price">9$</p>
            <p className="card--pricing__plan-price--info">/user/month</p>
            <p className="card--pricing__plan-feature">
              fascinating artificial intelligence
            </p>
            <p className="card--pricing__plan-feature">
              sublime construction tech
            </p>
            <p className="card--pricing__plan-feature">astonishing speed</p>
            <p className="card--pricing__plan-feature">
              magnificent motherboards
            </p>
            <p className="card--pricing__plan-feature">
              state-of-the-art bioengineering
            </p>
            <p className="card--pricing__plan-feature">dazzling devOps</p>
          </Card>
          <Card type="pricing">
            <div className="card--pricing__plan-name">
              Pro
              <span
                className="dolphin-emoji"
                role="img"
                aria-label="pro plan emoji"
              >
                <Img
                  alt="pro plan emoji"
                  fixed={mediumFishEmoji.childImageSharp.fixed}
                />
              </span>
            </div>
            <p className="card--pricing__plan-price">20$</p>
            <p className="card--pricing__plan-price--info">/user/month</p>
            <p className="card--pricing__plan-feature">
              all the basic features
            </p>
            <p className="card--pricing__plan-feature">+</p>
            <p className="card--pricing__plan-feature">
              cool blockchain thingy
            </p>
            <p className="card--pricing__plan-feature">some machine learning</p>
            <p className="card--pricing__plan-feature">crazy nanotechnology</p>
            <p className="card--pricing__plan-feature">
              more spectacular things
            </p>
          </Card>
          <Card type="pricing">
            <div className="card--pricing__plan-name">
              Enterprise
              <span
                className="whale-emoji"
                role="img"
                aria-label="enterprise plan emoji"
              >
                <Img
                  alt="enterprise plan emoji"
                  fluid={bigFishEmoji.childImageSharp.fluid}
                />
              </span>
            </div>
            <p className="card--pricing__plan-contact">Contact us</p>
            <p className="card--pricing__plan-feature">
              all the basic and pro features
            </p>
            <p className="card--pricing__plan-feature">+</p>
            <p className="card--pricing__plan-feature">more bling bling</p>
            <p className="card--pricing__plan-feature">
              crazy good 24/7 support
            </p>
            <p className="card--pricing__plan-feature">
              top-notch cybersecurity
            </p>
            <p className="card--pricing__plan-feature">
              robots with sick moves
            </p>
          </Card>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default PricingSection;
