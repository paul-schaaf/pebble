import React, { Fragment, Component } from 'react';
import Img from 'gatsby-image';
import { Spring, animated, config } from 'react-spring';
import Waypoint from 'react-waypoint';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './helperComponents/card';

import pebble1 from '../images/pebbles/orange_pebble1.svg';

import './featureSection.sass';

class FeatureCardContent extends Component {
  state = {
    toggleFinger: false,
  };

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
      <Fragment>
        <p className="card__heading">{this.props.heading}</p>
        <div className="card__main-emoji">
          <span>
            <Img
              alt={this.props.alt}
              className={`card__main-emoji__img card__main-emoji--${
                this.props.isRobot ? 'feature' : 'robot'
              }`}
              fixed={this.props.emoji.childImageSharp.fixed}
            />
          </span>
        </div>
        <p className="card__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>
        <Centrifier>
          <div className="card__read-more">
            <Spring
              native
              from={{ transform: 'translateX(0px) translateY(1.5px)' }}
              to={{
                transform: this.state.toggleFinger
                  ? 'translateX(2px) translateY(1.5px)'
                  : 'translateX(0px) translateY(1.5px)',
              }}
              config={{ friction: 6 }}
            >
              {props => (
                <animated.span style={props}>
                  <Img
                    alt="pointing finger"
                    className="card__finger"
                    fixed={this.props.fingerEmoji.childImageSharp.fixed}
                  />
                </animated.span>
              )}
            </Spring>
            <p
              onMouseEnter={this.onReadEnter}
              onMouseLeave={this.onReadLeave}
              style={{ display: 'inline' }}
            >
              Read more
            </p>
          </div>
        </Centrifier>
      </Fragment>
    );
  }
}

class FeatureSection extends Component {
  state = {
    fadeUp: false,
  };

  onWaypointEnter = () => {
    this.setState({ fadeUp: true });
  };

  render() {
    return (
      <div className="feature-section">
        <div className="feature-section___pebble-box">
          <img
            alt=""
            className="feature-section__pebble-box__pebble1"
            src={pebble1}
          />
          <img
            alt=""
            className="feature-section__pebble-box__pebble2"
            src={pebble1}
          />
          <img
            alt=""
            className="feature-section__pebble-box__pebble3"
            src={pebble1}
          />

          <img
            alt=""
            className="feature-section__pebble-box__pebble4"
            src={pebble1}
          />

          <img
            alt=""
            className="feature-section__pebble-box__pebble5"
            src={pebble1}
          />

          <img
            alt=""
            className="feature-section__pebble-box__pebble6"
            src={pebble1}
          />
        </div>
        <Container>
          <p className="feature-section__heading">Features</p>
          <Centrifier>
            <Waypoint onEnter={this.onWaypointEnter}>
              <div>
                <Spring
                  native
                  items={this.state.fadeUp}
                  from={{ opacity: 0, transform: 'translateY(150px)' }}
                  to={{
                    opacity: 1,
                    transform: this.state.fadeUp
                      ? 'translateY(0px)'
                      : 'translateY(150px)',
                  }}
                  config={config.slow}
                >
                  {props => (
                    <animated.div
                      style={props}
                      className="feature-section__card-grid"
                    >
                      <Card type="feature">
                        <FeatureCardContent
                          heading="Construction Tech"
                          alt="crane emoji"
                          emoji={this.props.craneEmoji}
                          fingerEmoji={this.props.fingerEmoji}
                        />
                      </Card>
                      <Card type="feature">
                        <FeatureCardContent
                          heading="Nanotechnology"
                          alt="microscope emoji"
                          emoji={this.props.microscopeEmoji}
                          fingerEmoji={this.props.fingerEmoji}
                        />
                      </Card>
                      <Card type="feature">
                        <FeatureCardContent
                          heading="Robotics"
                          alt="robot emoji"
                          emoji={this.props.robotEmoji}
                          fingerEmoji={this.props.fingerEmoji}
                        />
                      </Card>
                      <Card type="feature">
                        <FeatureCardContent
                          heading="Bioengineering"
                          alt="dna emoji"
                          emoji={this.props.dnaEmoji}
                          fingerEmoji={this.props.fingerEmoji}
                        />
                      </Card>
                      <Card type="feature">
                        <FeatureCardContent
                          heading="Cybersecurity"
                          alt="police car emoji"
                          emoji={this.props.policeCarEmoji}
                          fingerEmoji={this.props.fingerEmoji}
                        />
                      </Card>
                      <Card type="feature">
                        <FeatureCardContent
                          heading="Neuroscience"
                          alt="brain emoji"
                          emoji={this.props.brainEmoji}
                          fingerEmoji={this.props.fingerEmoji}
                        />
                      </Card>
                    </animated.div>
                  )}
                </Spring>
              </div>
            </Waypoint>
          </Centrifier>
        </Container>
      </div>
    );
  }
}

export default FeatureSection;
