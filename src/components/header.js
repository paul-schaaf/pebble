import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Container from './helperComponents/container';

import './header.sass';

class Header extends Component {
  render() {
    return (
      <div className="navbar-box">
        <Container>
          <p className="title">{this.props.siteTitle}</p>
          <div className="link-box">
            <p>Why Pebble?</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Praise</p>
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
