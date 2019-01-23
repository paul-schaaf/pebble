import React, { Fragment } from 'react';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './helperComponents/card';

import pebble1 from '../images/pebbles/blue_pebble1.svg';

import './pricingSection.sass';

const PricingCardContent = ({ name, emoji, alt, price, features }) => (
  <Fragment>
    <div className="card--pricing__plan-name">
      {name}
      <span
        className={
          name === 'Pro' ? 'dolphin' : name === 'Enterprise' ? 'whale' : null
        }
      >
        {name === 'Enterprise' && (
          <Img alt={alt} fluid={emoji.childImageSharp.fluid} />
        )}
        {name !== 'Enterprise' && (
          <Img alt={alt} fixed={emoji.childImageSharp.fixed} />
        )}
      </span>
    </div>

    {name !== 'Enterprise' && (
      <Fragment>
        <p className="card--pricing__plan-price">{`${price}$`}</p>
        <p className="card--pricing__plan-price--info">/user/month</p>
      </Fragment>
    )}
    {name === 'Enterprise' && (
      <p className="card--pricing__plan-contact">Contact us</p>
    )}
    <p className="card--pricing__plan-feature">{features[0]}</p>
    <p className="card--pricing__plan-feature">{features[1]}</p>
    <p className="card--pricing__plan-feature">{features[2]}</p>
    <p className="card--pricing__plan-feature">{features[3]}</p>
    <p className="card--pricing__plan-feature">{features[4]}</p>
    <p className="card--pricing__plan-feature">{features[5]}</p>
  </Fragment>
);

const PricingSection = ({ smallFishEmoji, mediumFishEmoji, bigFishEmoji }) => (
  <div className="pricing-section">
    <div className="pricing-section__pebble-box">
      <img
        alt=""
        className="pricing-section__pebble-box__pebble1"
        src={pebble1}
      />

      <img
        alt=""
        className="pricing-section__pebble-box__pebble2"
        src={pebble1}
      />
      <img
        alt=""
        className="pricing-section__pebble-box__pebble3"
        src={pebble1}
      />

      <img
        alt=""
        className="pricing-section__pebble-box__pebble4"
        src={pebble1}
      />

      <img
        alt=""
        className="pricing-section__pebble-box__pebble5"
        src={pebble1}
      />
    </div>
    <Container>
      <p className="pricing-section__heading">Pricing</p>
      <Centrifier>
        <div className="pricing-section__plan-box">
          <Card type="pricing">
            <PricingCardContent
              name="Basic"
              emoji={smallFishEmoji}
              alt="basic plan emoji"
              price={9}
              features={[
                'fascinating artificial intelligence',
                'sublime construction tech',
                'astonishing speed',
                'magnificent motherboards',
                'state-of-the-art bioengineering',
                'dazzling devOps',
              ]}
            />
          </Card>
          <Card type="pricing">
            <PricingCardContent
              name="Pro"
              emoji={mediumFishEmoji}
              alt="pro plan emoji"
              price={20}
              features={[
                'all the basic features',
                '+',
                'cool blockchain thingy',
                'some machine learning',
                'crazy nanotechnology',
                'more spectacular things',
              ]}
            />
          </Card>
          <Card type="pricing">
            <PricingCardContent
              name="Enterprise"
              emoji={bigFishEmoji}
              alt="enterprise plan emoji"
              features={[
                'all the basic and pro features',
                '+',
                'more bling bling',
                'crazy good 24/7 support',
                'top-notch cybersecurity',
                'robots with sick moves',
              ]}
            />
          </Card>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default PricingSection;
