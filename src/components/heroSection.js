import React, { Component } from 'react';
import { Transition, Spring, animated } from 'react-spring';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import './heroSection.sass';

const TitleTransition = ({ children, show }) => (
  <Transition
    items={show}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    config={{ duration: 1500 }}
  >
    {show => show && (props => <div style={props}>{children}</div>)}
  </Transition>
);

const SubTitleTransition = ({ children, show }) => (
  <Transition
    items={show}
    from={{ opacity: 0, transform: 'translateY(50px)' }}
    enter={{ opacity: 1, transform: 'translateY(0px)' }}
    config={{ friction: 50, delay: 1100 }}
  >
    {show => show && (props => <div style={props}>{children}</div>)}
  </Transition>
);

const FingerSpring = ({ children, toggleFinger }) => (
  <Spring
    native
    from={{ transform: 'translateX(0px) translateY(1.5px)' }}
    to={{
      transform: toggleFinger
        ? 'translateX(4px) translateY(1.5px)'
        : 'translateX(0px) translateY(1.5px)',
    }}
    config={{ friction: 8 }}
  >
    {props => <animated.span style={props}>{children}</animated.span>}
  </Spring>
);

class HeroSection extends Component {
  state = {
    show: false,
    toggleFinger: false,
  };

  componentDidMount = () => this.setState({ show: true });

  onReadEnter = () => {
    if (!this.state.toggleFinger) {
      this.setState({ toggleFinger: true });
    }
  };

  onReadLeave = () => {
    if (this.state.toggleFinger) {
      this.setState({ toggleFinger: false });
    }
  };

  render() {
    return (
      <div className="hero-section">
        <Container>
          <Centrifier>
            <div className="hero-section__content">
              <TitleTransition show={this.state.show}>
                <p className="hero-section__content__heading">Stones</p>
                <p className="hero-section__content__heading">Redefined</p>
              </TitleTransition>
              <Centrifier>
                <SubTitleTransition show={this.state.show}>
                  <div className="hero-section__content__text">
                    <FingerSpring toggleFinger={this.state.toggleFinger}>
                      <Img
                        alt="pointing finger"
                        fluid={this.props.fingerEmoji.childImageSharp.fluid}
                      />
                    </FingerSpring>
                    <p
                      onMouseEnter={this.onReadEnter}
                      onMouseLeave={this.onReadLeave}
                      style={{ display: 'inline' }}
                    >
                      Sign up for trial
                    </p>
                  </div>
                </SubTitleTransition>
              </Centrifier>
            </div>
          </Centrifier>
        </Container>
      </div>
    );
  }
}

export default HeroSection;
