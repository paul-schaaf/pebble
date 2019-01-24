import React, { Fragment, Component } from 'react';
import Img from 'gatsby-image';
import { Spring, animated, config } from 'react-spring';
import Waypoint from 'react-waypoint';

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

class PraiseSection extends Component {
  render() {
    return (
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
                emoji={this.props.womanYellowFaceWhiteHair}
                text="Amazing tool!"
                author="Jayqueline"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.robotEmoji}
                text="Beep Boop."
                author="Mr.Robot"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.manYellowFaceWhiteHair}
                text="Spectacular!"
                author="Bob"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.grandma}
                text="I love this thing!!"
                author="grandma"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.womanBlackFaceCurlyHair}
                text="Fantastic Features!"
                author="annie"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.zombie}
                text="Nice work, yummy!"
                author="theFriendlyZombie"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.womanArtist}
                text="Beautiful!"
                author="emilia"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.manAstronaut}
                text="Five stars!"
                author="oscar"
              />
            </Card>
            <div className="praise-section__scroll-box__card-box--one__placeholder" />
          </div>
          <div className="praise-section__scroll-box__card-box">
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.womanWhiteFaceBlackHair}
                text="Great and simple!"
                author="Dnice"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.santaEmoji}
                text="Pebble is the bomb!"
                author="Santa"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.manBlackFaceBlackHair}
                text="Awesome stuff!"
                author="Jack"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.womanWhiteFaceRedhair}
                text="I've fallen in love!"
                author="hannah"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.manScientist}
                text="Just Sublime!"
                author="Lance"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.manLaptop}
                text="Magnificent"
                author="henry"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.princess}
                text="Yes, yes, yes!"
                author="sissi"
              />
            </Card>
            <Card type="praise">
              <PraiseCardContent
                emoji={this.props.blackOfficer}
                text="Very secure!"
                author="richard"
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default PraiseSection;
