import React from 'react';

import Container from './helperComponents/container';
import Card from './card';

import './pricingSection.sass';

const PricingSection = () => (
  <div className="pricing-section">
    <Container>
      <p className="pricing-section__heading">Pricing</p>
      <div className="pricing-section__plan-box">
        <Card type="pricing">
          <p className="card--pricing__plan-name">
            Basic
            <span role="img" aria-label="basic plan emoji">
              &#x1F41F;
            </span>
          </p>
        </Card>
        <Card type="pricing">
          <p className="card--pricing__plan-name">
            Pro
            <span role="img" aria-label="pro plan emoji">
              &#x1F42C;
            </span>
          </p>
        </Card>
        <Card type="pricing">
          <p className="card--pricing__plan-name">
            Enterprise
            <span
              className="whale-emoji"
              role="img"
              aria-label="enterprise plan emoji"
            >
              &#x1F433;
            </span>
          </p>
        </Card>
      </div>
    </Container>
  </div>
);

export default PricingSection;
