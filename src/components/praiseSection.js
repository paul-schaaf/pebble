import React, { Fragment } from 'react';
import Img from 'gatsby-image';

import Container from './helperComponents/container';
import Card from './card';

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
}) => (
  <div className="praise-section">
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
        {/*
        <Card type="praise">
          <PraiseCardContent emoji="👨‍🦳" text="Spectacular!" author="Bob" />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji="👵🏻"
            text="I love this thing!!"
            author="grandma"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji="👩🏾‍🦱"
            text="Fantastic Features!"
            author="annie"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji="🧟"
            text="Nice work, yummy!"
            author="theFriendlyZombie"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent emoji="👩‍🎨" text="Beautiful!" author="emilia" />
        </Card>
        <Card type="praise">
          <PraiseCardContent emoji="👨‍🚀" text="Five stars!" author="oscar" />
        </Card>*/}
        <div className="praise-section__scroll-box__card-box--one__placeholder" />
      </div>
      <div className="praise-section__scroll-box__card-box">
        <Card type="praise">
          <PraiseCardContent
            emoji={womanWhiteFaceBlackHair}
            text="So great and simple!"
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
        {/*
        <Card type="praise">
          <PraiseCardContent emoji="👨🏾" text="Awesome stuff!" author="Jack" />
        </Card>
        <Card type="praise">
          <PraiseCardContent
            emoji="👩🏻‍🦰"
            text="I've fallen in love!"
            author="hannah"
          />
        </Card>
        <Card type="praise">
          <PraiseCardContent emoji="👨‍🔬" text="Just Sublime!" author="Lance" />
        </Card>
        <Card type="praise">
          <PraiseCardContent emoji="👨🏾‍💻" text="Magnificent" author="henry" />
        </Card>
        <Card type="praise">
          <PraiseCardContent emoji="👸🏼" text="Yes, yes, yes!" author="sissi" />
        </Card>
        <Card type="praise">
          <PraiseCardContent emoji="👮🏿" text="Very secure!" author="richard" />
      </Card>*/}
      </div>
    </div>
  </div>
);

export default PraiseSection;
