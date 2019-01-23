import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import './heroSection.sass';

class HeroSection extends Component {
  state = {
    show: false,
  };

  componentDidMount = () => this.setState({ show: true });

  render() {
    return (
      <div className="hero-section">
        <Container>
          <Centrifier>
            <div className="hero-section__content">
              <Transition
                items={this.state.show}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                config={{ duration: 2000 }}
              >
                {show =>
                  show &&
                  (props => (
                    <Fragment>
                      <p
                        style={props}
                        className="hero-section__content__heading"
                      >
                        Stones
                      </p>
                      <p
                        style={props}
                        className="hero-section__content__heading"
                      >
                        Redefined
                      </p>
                    </Fragment>
                  ))
                }
              </Transition>

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
