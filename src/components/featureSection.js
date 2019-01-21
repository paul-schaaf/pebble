import React from 'react';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './card';

import './featureSection.sass';

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
            <p className="card__heading">Construction Tech</p>
            <div className="card__main-emoji">
              <span role="img" aria-label="construction emoji">
                <Img
                  alt="crane emoji"
                  className="card__main-emoji__img"
                  fixed={craneEmoji.childImageSharp.fixed}
                />
              </span>
            </div>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
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
          </Card>
          <Card type="feature">
            <p className="card__heading">Nanotechnology</p>
            <div className="card__main-emoji">
              <span role="img" aria-label="microscope emoji">
                <Img
                  alt="microscope emoji"
                  className="card__main-emoji__img"
                  fixed={microscopeEmoji.childImageSharp.fixed}
                />
              </span>
            </div>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
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
          </Card>
          <Card type="feature">
            <p className="card__heading">Robotics</p>
            <div className="card__main-emoji">
              <span role="img" aria-label="robot emoji">
                <Img
                  alt="robot emoji"
                  className="card__main-emoji__img"
                  fixed={robotEmoji.childImageSharp.fixed}
                />
              </span>
            </div>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
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
          </Card>
          <Card type="feature">
            <p className="card__heading">Bioengineering</p>
            <div className="card__main-emoji">
              <span role="img" aria-label="DNA emoji">
                <Img
                  alt="dna emoji"
                  className="card__main-emoji__img"
                  fixed={dnaEmoji.childImageSharp.fixed}
                />
              </span>
            </div>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
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
          </Card>
          <Card type="feature">
            <p className="card__heading">Cybersecurity</p>
            <div className="card__main-emoji">
              <span role="img" aria-label="police car emoji">
                <Img
                  alt="police car emoji"
                  className="card__main-emoji__img"
                  fixed={policeCarEmoji.childImageSharp.fixed}
                />
              </span>
            </div>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
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
          </Card>
          <Card type="feature">
            <p className="card__heading">Neuroscience</p>
            <div className="card__main-emoji">
              <span role="img" aria-label="brain emoji">
                <Img
                  alt="brain emoji"
                  className="card__main-emoji__img"
                  fixed={brainEmoji.childImageSharp.fixed}
                />
              </span>
            </div>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
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
          </Card>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default FeatureSection;
