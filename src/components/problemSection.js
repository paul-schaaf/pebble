import React, { Fragment, Component } from 'react';
import Img from 'gatsby-image';
import { Spring, animated, config } from 'react-spring';
import Waypoint from 'react-waypoint';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './helperComponents/card';

import pebble1 from '../images/pebbles/blue_pebble1.svg';

import './problemSection.sass';

class ProblemCardContent extends Component {
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
        <div className="card__main-emoji card__main-emoji--problem">
          <span>
            <Img
              alt={this.props.alt}
              className="card__main-emoji__img"
              fixed={this.props.emoji.childImageSharp.fixed}
            />
          </span>
        </div>
        <p className="card__text">{this.props.text}</p>
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

class ProblemSection extends Component {
  state = {
    fadeUp: false,
  };
  onWaypointEnter = () => {
    this.setState({ fadeUp: true });
  };
  render() {
    return (
      <div className="problem-section">
        <div className="problem-section__pebble-box">
          <img
            alt=""
            className="problem-section__pebble-box__pebble1"
            src={pebble1}
          />
          <img
            alt=""
            className="problem-section__pebble-box__pebble2"
            src={pebble1}
          />
          <img
            alt=""
            className="problem-section__pebble-box__pebble3"
            src={pebble1}
          />
          <img
            alt=""
            className="problem-section__pebble-box__pebble4"
            src={pebble1}
          />
          <img
            alt=""
            className="problem-section__pebble-box__pebble5"
            src={pebble1}
          />
        </div>
        <Container>
          <Centrifier>
            <div className="problem-section__header-box">
              <p className="problem-section__header-box__heading">
                Why Pebble?
              </p>
              <p className="problem-section__header-box__subtitle">
                We are solving key issues that the
              </p>
              <p className="problem-section__header-box__subtitle">
                stone industry faces today
              </p>
            </div>
          </Centrifier>
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
                      className="problem-section__card-box"
                    >
                      <Card type="problem">
                        <ProblemCardContent
                          heading="No Healthy Food"
                          emoji={this.props.lollipopEmoji}
                          alt="lollipop emoji"
                          text="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco labo-ris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in volup-tate velit esse cillum dolore eu fugiat
          nulla paria-tur. Excepteur sint aliquip ex ea commodo ea ut"
                          fingerEmoji={this.props.fingerEmoji}
                        />
                      </Card>
                      <Card type="problem">
                        <ProblemCardContent
                          heading="High Housing Costs"
                          emoji={this.props.shackEmoji}
                          alt="shack emoji"
                          text="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco labo-ris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in volup-tate velit esse cillum dolore eu fugiat
          nulla paria-tur. Excepteur sint aliquip ex ea commodo ea ut"
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

export default ProblemSection;
