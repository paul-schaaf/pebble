import React, { Fragment } from 'react';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './helperComponents/card';

import pebble1 from '../images/pebbles/blue_pebble1.svg';

import './problemSection.sass';

const ProblemCardContent = ({ heading, emoji, alt, text, fingerEmoji }) => (
  <Fragment>
    <p className="card__heading">{heading}</p>
    <div className="card__main-emoji card__main-emoji--problem">
      <span>
        <Img
          alt={alt}
          className="card__main-emoji__img"
          fixed={emoji.childImageSharp.fixed}
        />
      </span>
    </div>
    <p className="card__text">{text}</p>
    <Centrifier>
      <div className="card__read-more">
        <span>
          <Img
            alt="pointing finger"
            className="card__finger"
            fixed={fingerEmoji.childImageSharp.fixed}
          />
        </span>
        Read more
      </div>
    </Centrifier>
  </Fragment>
);

const ProblemSection = ({ lollipopEmoji, shackEmoji, fingerEmoji }) => (
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
          <p className="problem-section__header-box__heading">Why Pebble?</p>
          <p className="problem-section__header-box__subtitle">
            We are solving key issues that the
          </p>
          <p className="problem-section__header-box__subtitle">
            stone industry faces today
          </p>
        </div>
      </Centrifier>
      <Centrifier>
        <div className="problem-section__card-box">
          <Card type="problem">
            <ProblemCardContent
              heading="No Healthy Food"
              emoji={lollipopEmoji}
              alt="lollipop emoji"
              text="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco labo-ris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in volup-tate velit esse cillum dolore eu fugiat
            nulla paria-tur. Excepteur sint aliquip ex ea commodo ea ut"
              fingerEmoji={fingerEmoji}
            />
          </Card>
          <Card type="problem">
            <ProblemCardContent
              heading="High Housing Costs"
              emoji={shackEmoji}
              alt="shack emoji"
              text="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco labo-ris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in volup-tate velit esse cillum dolore eu fugiat
            nulla paria-tur. Excepteur sint aliquip ex ea commodo ea ut"
              fingerEmoji={fingerEmoji}
            />
          </Card>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default ProblemSection;
