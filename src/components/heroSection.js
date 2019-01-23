import React, { Component } from 'react';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import './heroSection.sass';

class HeroSection extends Component {
  render() {
    return (
      <div className="hero-section">
        <Container>
          <Centrifier>
            <div className="hero-section__content">
              <p className="hero-section__content__heading">Stones</p>

              <p className="hero-section__content__heading">Redefined</p>
              <Centrifier>
                <div className="hero-section__content__text">
                  <span aria-label="pointing finger" role="img">
                    <Img
                      alt="pointing finger"
                      fluid={this.props.fingerEmoji.childImageSharp.fluid}
                    />
                  </span>
                  Sign up for trial
                </div>
              </Centrifier>
            </div>
          </Centrifier>
        </Container>
      </div>
    );
  }
}

export default HeroSection;
