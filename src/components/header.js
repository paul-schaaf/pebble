import PropTypes from 'prop-types';
import React from 'react';

import Container from './helperComponents/container';

import './header.sass';

const Header = ({ siteTitle }) => (
  <div className="navbar-box">
    <Container>
      <p className="title">{siteTitle}</p>
      <div className="link-box">
        <p>Why Pebble?</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Praise</p>
      </div>
    </Container>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
