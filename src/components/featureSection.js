import React, { Fragment } from 'react';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './card';

import './featureSection.sass';

const FeatureCardContent = ({ heading, alt, isRobot, emoji, fingerEmoji }) => (
  <Fragment>
    <p className="card__heading">{heading}</p>
    <div className="card__main-emoji">
      <span>
        <Img
          alt={alt}
          className={`card__main-emoji__img card__main-emoji--${
            isRobot ? 'feature' : 'robot'
          }`}
          fixed={emoji.childImageSharp.fixed}
        />
      </span>
    </div>
    <p className="card__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis
    </p>
    <Centrifier>
      <div className="card__read-more">
        <span role="img" aria-label="pointing finger">
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
