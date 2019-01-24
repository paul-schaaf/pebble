import React, { Fragment, Component } from 'react';
import Img from 'gatsby-image';
import Waypoint from 'react-waypoint';

import Container from './helperComponents/container';
import Card from './helperComponents/card';
import FadeUp from './helperComponents/fadeUp';

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
  state = {
    headingUp: false,
    contentUp: false,
  };

  onHeadingWaypointEnter = () => {
    this.setState({ headingUp: true });
  };

  onContentWaypointEnter = () => {
    this.setState({ contentUp: true });
  };

  renderPebbles = () => {
    const pebbleList = Array(5)
      .fill(0)
      .map((item, index) => (
        <img
          alt=""
          className={`praise-section__pebble-box__pebble${index + 1}`}
          src={pebble1}
        />
      ));
    return pebbleList;
  };

  render() {
    return (
      <div className="praise-section">
        <div className="praise-section___pebble-box">
          {this.renderPebbles()}
        </div>
        <Container>
          <Waypoint bottomOffset="20px" onEnter={this.onHeadingWaypointEnter}>
            <div>
              <FadeUp fadeUp={this.state.headingUp}>
                <p className="praise-section__heading">Praise</p>
              </FadeUp>
            </div>
          </Waypoint>
        </Container>
        <Waypoint bottomOffset="40px" onEnter={this.onContentWaypointEnter}>
          <div>
            <FadeUp fadeUp={this.state.contentUp}>
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
            </FadeUp>
          </div>
        </Waypoint>
      </div>
    );
  }
}

export default PraiseSection;
