import React, { Fragment } from 'react';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Card from './helperComponents/card';

import pebble1 from '../images/pebbles/orange_pebble1.svg';

import './praiseSection.sass';

const PraiseCardContent = ({ emoji, text, author }) => (
  <Fragment>
    <div className="card--praise__praise-emoji">
      <Img fixed={emoji.childImageSharp.fixed} />
    </div>
    <p className="card--praise__praise-text">{text}</p>
    <p className="card--praise__praise-author">{`- @${author}`}</p>
  </Fragment>
);

const PraiseSection = ({
  womanYellowFaceWhiteHair,
  womanWhiteFaceBlackHair,
  robotEmoji,
  santaEmoji,
  manYellowFaceWhiteHair,
  manBlackFaceBlackHair,
  grandma,
  womanWhiteFaceRedhair,
  womanBlackFaceCurlyHair,
  manScientist,
  zombie,
  manLaptop,
  womanArtist,
  princess,
  manAstronaut,
  blackOfficer,
}) => (
  <div className="praise-section">
    <div className="praise-section___pebble-box">
      <img
        alt=""
        className="praise-section__pebble-box__pebble1"
        src={pebble1}
      />
      <img
        alt=""
        className="praise-section__pebble-box__pebble2"
        src={pebble1}
      />
      <img
        alt=""
        className="praise-section__pebble-box__pebble3"
        src={pebble1}
      />
      <img
        alt=""
        className="praise-section__pebble-box__pebble4"
        src={pebble1}
      />
      <img
        alt=""
        className="praise-section__pebble-box__pebble5"
        src={pebble1}
      />
    </div>
    <Container>
      <p className="praise-section__heading">Praise</p>
    </Container>
    <div className="praise-section__scroll-box">
      <div className="praise-section__scroll-box__card-box--one">
        <Card type="praise">
          <PraiseCardContent
            emoji={womanYellowFaceWhiteHair}
            text="Amazing tool!"
            author="Jayqueline"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={robotEmoji}
            text="Beep Boop."
            author="Mr.Robot"
          />
        </Card>

        <Card type="praise">
          <PraiseCardContent
            emoji={manYellowFaceWhiteHair}
            text="Spectacular!"
            author="Bob"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={grandma}
            text="I love this thing!!"
            author="grandma"
          />
        </Card>

        <Card type="praise">
          <PraiseCardContent
            emoji={womanBlackFaceCurlyHair}
            text="Fantastic Features!"
            author="annie"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={zombie}
            text="Nice work, yummy!"
            author="theFriendlyZombie"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={womanArtist}
            text="Beautiful!"
            author="emilia"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={manAstronaut}
            text="Five stars!"
            author="oscar"
          />
        </Card>
        <div className="praise-section__scroll-box__card-box--one__placeholder" />
      </div>
      <div className="praise-section__scroll-box__card-box">
        <Card type="praise">
          <PraiseCardContent
            emoji={womanWhiteFaceBlackHair}
            text="Great and simple!"
            author="Dnice"
          />
        </Card>

        <Card type="praise">
          <PraiseCardContent
            emoji={santaEmoji}
            text="Pebble is the bomb!"
            author="Santa"
          />
        </Card>

        <Card type="praise">
          <PraiseCardContent
            emoji={manBlackFaceBlackHair}
            text="Awesome stuff!"
            author="Jack"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={womanWhiteFaceRedhair}
            text="I've fallen in love!"
            author="hannah"
          />
        </Card>

        <Card type="praise">
          <PraiseCardContent
            emoji={manScientist}
            text="Just Sublime!"
            author="Lance"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={manLaptop}
            text="Magnificent"
            author="henry"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={princess}
            text="Yes, yes, yes!"
            author="sissi"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji={blackOfficer}
            text="Very secure!"
            author="richard"
          />
        </Card>
      </div>
    </div>
  </div>
);

export default PraiseSection;
