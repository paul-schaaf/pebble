import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Transition, Trail, animated, config } from 'react-spring';

import Container from './helperComponents/container';

import pebbleIcon from '../images/header_oval.svg';

import './header.sass';

const NavbarTransition = ({ children, showNavbar }) => (
  <Transition
    native
    items={showNavbar}
    from={{ transform: 'translateY(-50px)' }}
    enter={{ transform: 'translateY(0px)' }}
    config={{ friction: 50, delay: 700 }}
  >
    {showNavbar =>
      showNavbar &&
      (props => <animated.div style={props}>{children}</animated.div>)
    }
  </Transition>
);

const IconTransition = ({ showIcon, children }) => (
  <Transition
    native
    items={showIcon}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >
    {show =>
      show && (props => <animated.div style={props}>{children}</animated.div>)
    }
  </Transition>
);

const MenuTrail = ({ list, onMenuClick, showTrail }) => (
  <Trail
    native
    items={list}
    config={config.gentle}
    keys={item => item.section}
    from={{
      transform: 'translate3d(0,80px,0)',
      opacity: 0,
    }}
    to={{
      transform: showTrail ? 'translate3d(0,0px,0)' : 'translate3d(0,80px,0)',
      opacity: showTrail ? 1 : 0,
    }}
  >
    {(item, index) => props => (
      <Link
        to={item.section}
        spy={true}
        smooth={'easeInOutCubic'}
        duration={750}
        offset={-80}
        delay={1300}
      >
        <animated.p
          style={props}
          onClick={onMenuClick}
          className={`menu__link--${index}`}
        >
          {item.text}
        </animated.p>
      </Link>
    )}
  </Trail>
);

class Header extends Component {
  state = {
    prevScrollpos: 0,
    canShowNavbar: true,
    scrollTimer: 'none',
    showNavbar: false,
    menuOpen: false,
    showIcon: false,
    showTrail: false,
    trailList: [
      { text: 'Why Pebble?', section: 'problemSection' },
      { text: 'Features', section: 'featureSection' },
      { text: 'Pricing', section: 'pricingSection' },
      { text: 'Praise', section: 'praiseSection' },
    ],
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.navbarDisplayHandler);
    this.setState({ prevScrollpos: window.pageYOffset, showNavbar: true });
  };

  navbarDisplayHandler = () => {
    const prevScrollpos = this.state.prevScrollpos;
    let currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    /**
     * navbar receives shadow once user starts to scroll
     * (and it doesnt already have a shadow)
     */
    if (currentScrollPos > 0 && !navbar.classList.contains('navbar-shadow')) {
      navbar.classList.add('navbar-shadow');
    } else if (currentScrollPos === 0) {
      navbar.classList.remove('navbar-shadow');
    }
    /**
     * as long as window is not scrolled past navbar,
     * the navbar should not disappear
     */
    if (currentScrollPos <= 80) {
      navbar.style.top = '0';
    } else {
      /**
       * if user scrolls up and if it is allowed to show navbar,
       * show the navbar
       */
      if (prevScrollpos > currentScrollPos && this.state.canShowNavbar) {
        navbar.style.top = '0';
      }
      /**
       * if user scrolls down and past the navbar,
       * hide the navbar and also set a timer during which
       * navbar can not be shown even when window is being
       * scrolled up. This is implemented so the user does
       * not accidently reveal the navbar. E.g. on a mac after
       * you scroll down with 2 fingers, you will likely make a
       * mini move with your hand that would show the navbar
       * if this timer wasnt implemented
       */
      if (prevScrollpos < currentScrollPos && currentScrollPos > 80) {
        if (this.state.scrollTimer !== 'none') {
          clearTimeout(this.state.scrollTimer);
        }
        this.setState({ canShowNavbar: false });
        navbar.style.top = '-85px';
        this.setState({
          scrollTimer: setTimeout(() => {
            this.setState({ canShowNavbar: true });
          }, 500),
        });
      }
      this.setState({ prevScrollpos: currentScrollPos });
    }
  };

  onMenuClick = () => {
    const pebble = document.querySelector('.navbar-box__pebble');
    const body = document.querySelector('body');
    if (!this.state.menuOpen) {
      pebble.style.transform =
        'scale3d(250, 250, 250) rotate(45deg) translateY(2.5px) translateX(4px)';
      pebble.style.opacity = 0.85;
      body.classList.add('stop-scrolling');

      setTimeout(() => {
        this.setState({ showTrail: true, showIcon: true });
      }, 200);

      this.setState({ menuOpen: true });
    } else {
      const pebble = document.querySelector('.navbar-box__pebble');
      pebble.style.transform =
        'scale3d(1, 1, 1) rotate(0deg) translateY(2.5px)';
      pebble.style.opacity = 1;
      this.setState({ showTrail: false, showIcon: false });
      setTimeout(() => {
        this.setState({ menuOpen: false });
      }, 1000);

      body.classList.remove('stop-scrolling');
    }
  };

  render() {
    return (
      <div id="navbar" className="navbar-box">
        <Container>
          <NavbarTransition showNavbar={this.state.showNavbar}>
            <img
              alt="pebble icon"
              className="navbar-box__pebble"
              src={pebbleIcon}
            />
            <Link
              to="heroSection"
              spy={true}
              smooth={'easeInOutCubic'}
              duration={750}
              offset={-80}
            >
              <p className="title">{this.props.siteTitle}</p>
            </Link>
            <div onClick={this.onMenuClick} className="hamburger-menu">
              <div className="hamburger-menu__line hamburger-menu__line--one" />
              <div className="hamburger-menu__line hamburger-menu__line--two" />
              <div className="hamburger-menu__line hamburger-menu__line--three" />
            </div>
          </NavbarTransition>
        </Container>
        {this.state.menuOpen && (
          <div className="menu">
            <IconTransition showIcon={this.state.showIcon}>
              <div
                style={props}
                onClick={this.onMenuClick}
                className="menu__icon-close"
              />
            </IconTransition>

            <MenuTrail
              showTrail={this.state.showTrail}
              list={this.state.trailList}
              onMenuClick={this.onMenuClick}
            />
          </div>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
