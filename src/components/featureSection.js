import React, { Fragment, Component } from 'react';
import Img from 'gatsby-image';
import { Spring, animated } from 'react-spring';

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

const FeatureSection = ({
  craneEmoji,
  microscopeEmoji,
  robotEmoji,
  dnaEmoji,
  policeCarEmoji,
  brainEmoji,
  fingerEmoji,
}) => (
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
        <div className="feature-section__card-grid">
          <Card type="feature">
            <FeatureCardContent
              heading="Construction Tech"
              alt="crane emoji"
              emoji={craneEmoji}
              fingerEmoji={fingerEmoji}
            />
          </Card>
          <Card type="feature">
            <FeatureCardContent
              heading="Nanotechnology"
              alt="microscope emoji"
              emoji={microscopeEmoji}
              fingerEmoji={fingerEmoji}
            />
          </Card>
          <Card type="feature">
            <FeatureCardContent
              heading="Robotics"
              alt="robot emoji"
              emoji={robotEmoji}
              fingerEmoji={fingerEmoji}
            />
          </Card>
          <Card type="feature">
            <FeatureCardContent
              heading="Bioengineering"
              alt="dna emoji"
              emoji={dnaEmoji}
              fingerEmoji={fingerEmoji}
            />
          </Card>
          <Card type="feature">
            <FeatureCardContent
              heading="Cybersecurity"
              alt="police car emoji"
              emoji={policeCarEmoji}
              fingerEmoji={fingerEmoji}
            />
          </Card>
          <Card type="feature">
            <FeatureCardContent
              heading="Neuroscience"
              alt="brain emoji"
              emoji={brainEmoji}
              fingerEmoji={fingerEmoji}
            />
          </Card>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default FeatureSection;
