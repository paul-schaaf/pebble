import React from 'react';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './card';

import './featureSection.sass';

const FeatureSection = () => (
  <div className="feature-section">
    <Container>
      <p className="feature-section__heading">Features</p>
      <Centrifier>
        <div className="feature-section__card-grid">
          <Card type="feature">
            <p className="card__heading">Construction Tech</p>
            <p className="card__main-emoji">
              <span role="img" aria-label="construction emoji">
                &#x1F3D7;
              </span>
            </p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <Centrifier>
              <p className="card__read-more">
                <span role="img" aria-label="pointing finger">
                  &#x1F449;
                </span>
                Read more
              </p>
            </Centrifier>
          </Card>
          <Card type="feature">
            <p className="card__heading">Nanotechnology</p>
            <p className="card__main-emoji">
              <span role="img" aria-label="microscope emoji">
                &#x1F52C;
              </span>
            </p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <Centrifier>
              <p className="card__read-more">
                <span role="img" aria-label="pointing finger">
                  &#x1F449;
                </span>
                Read more
              </p>
            </Centrifier>
          </Card>
          <Card type="feature">
            <p className="card__heading">Robotics</p>
            <p className="card__main-emoji">
              <span role="img" aria-label="robot emoji">
                &#x1F916;
              </span>
            </p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <Centrifier>
              <p className="card__read-more">
                <span role="img" aria-label="pointing finger">
                  &#x1F449;
                </span>
                Read more
              </p>
            </Centrifier>
          </Card>
          <Card type="feature">
            <p className="card__heading">Bioengineering</p>
            <p className="card__main-emoji">
              <span role="img" aria-label="DNA emoji">
                &#x1F9EC;
              </span>
            </p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <Centrifier>
              <p className="card__read-more">
                <span role="img" aria-label="pointing finger">
                  &#x1F449;
                </span>
                Read more
              </p>
            </Centrifier>
          </Card>
          <Card type="feature">
            <p className="card__heading">Cybersecurity</p>
            <p className="card__main-emoji">
              <span role="img" aria-label="police car emoji">
                &#x1F693;
              </span>
            </p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <Centrifier>
              <p className="card__read-more">
                <span role="img" aria-label="pointing finger">
                  &#x1F449;
                </span>
                Read more
              </p>
            </Centrifier>
          </Card>
          <Card type="feature">
            <p className="card__heading">Neuroscience</p>
            <p className="card__main-emoji">
              <span role="img" aria-label="brain emoji">
                &#x1F9E0;
              </span>
            </p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <Centrifier>
              <p className="card__read-more">
                <span role="img" aria-label="pointing finger">
                  &#x1F449;
                </span>
                Read more
              </p>
            </Centrifier>
          </Card>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default FeatureSection;
