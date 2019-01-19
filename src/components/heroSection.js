import React from 'react';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import './heroSection.sass';

const HeroSection = () => (
  <div className="hero-section">
    <Container>
      <Centrifier>
        <div className="hero-section__content">
          <p className="hero-section__content__heading">Stones</p>

          <p className="hero-section__content__heading">Redefined</p>
          <Centrifier>
            <p className="hero-section__content__text">
              <span aria-label="pointing finger" role="img">
                &#x1F449;
              </span>
              Sign up for trial
            </p>
          </Centrifier>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default HeroSection;
