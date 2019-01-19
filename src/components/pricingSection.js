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
          <p className="card--pricing__plan-name">Basic</p>
        </Card>
        <Card type="pricing">
          <p className="card--pricing__plan-name">Pro</p>
        </Card>
        <Card type="pricing">
          <p className="card--pricing__plan-name">Enterprise</p>
        </Card>
      </div>
    </Container>
  </div>
);

export default PricingSection;
