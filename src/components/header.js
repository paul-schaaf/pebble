import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Container from './helperComponents/container';

import './header.sass';

class Header extends Component {
  state = {
    prevScrollpos: 0,
    canShowNavbar: true,
    scrollTimer: 'none',
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.navbarDisplayHandler);
    this.setState({ prevScrollpos: window.pageYOffset });
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

  render() {
    return (
      <div id="navbar" className="navbar-box">
        <Container>
          <p className="title">{this.props.siteTitle}</p>
          <div className="hamburger-menu">
            <div className="hamburger-menu__line hamburger-menu__line--one" />
            <div className="hamburger-menu__line hamburger-menu__line--two" />
            <div className="hamburger-menu__line hamburger-menu__line--three" />
          </div>
        </Container>
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
