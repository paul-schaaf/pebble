import React from 'react';

import Container from './helperComponents/container';
import Card from './card';

import './pricingSection.sass';

const PricingSection = () => (
  <div className="pricing-section">
    <Container>
      <p className="pricing-section__heading">Pricing</p>
      <div className="pricing-section__plan-box">
        <Card type="pricing">Basic</Card>
        <Card type="pricing">Pro</Card>
        <Card type="pricing">Enterprise</Card>
      </div>
    </Container>
  </div>
);

export default PricingSection;
