import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
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
              <TitleTransition show={this.state.show}>
                <p className="hero-section__content__heading">Stones</p>
                <p className="hero-section__content__heading">Redefined</p>
              </TitleTransition>
              <Centrifier>
                <SubTitleTransition show={this.state.show}>
                  <div className="hero-section__content__text">
                    <span aria-label="pointing finger" role="img">
                      <Img
                        alt="pointing finger"
                        fluid={this.props.fingerEmoji.childImageSharp.fluid}
                      />
                    </span>
                    Sign up for trial
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
