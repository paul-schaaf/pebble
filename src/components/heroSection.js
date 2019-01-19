import React from 'react';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import './heroSection.sass';

const HeroSection = () => (
  <div className="hero-section">
    <Container>
      <Centrifier>
        <p>Stones</p>
      </Centrifier>
      <Centrifier>
        <p>Redefined</p>
      </Centrifier>
      <Centrifier>
        <p>
          <span>&#x1F449;</span>Sign up for trial
        </p>
      </Centrifier>
    </Container>
  </div>
);

export default HeroSection;
