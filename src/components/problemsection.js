import React from 'react';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import './problemSection.sass';

const ProblemSection = () => (
  <div className="problem-section">
    <Container>
      <Centrifier>
        <p>Why Pebble?</p>
        <p>We are solving key issues that the stone industry faces t0day</p>
      </Centrifier>
    </Container>
  </div>
);

export default ProblemSection;
