import React from 'react';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import Card from './card';

import './problemSection.sass';

const ProblemSection = () => (
  <div className="problem-section">
    <Container>
      <Centrifier>
        <div className="problem-section__header-box">
          <p className="problem-section__header-box__heading">Why Pebble?</p>
          <p className="problem-section__header-box__subtitle">
            We are solving key issues that the
          </p>
          <p className="problem-section__header-box__subtitle">
            stone industry faces today
          </p>
        </div>
      </Centrifier>
      <Centrifier>
        <div className="problem-section__card-box">
          <Card type="problem">hi</Card>
          <Card type="problem">hi</Card>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default ProblemSection;
