import PropTypes from 'prop-types';
import React from 'react';

import Container from './helperComponents/container';

import './header.sass';

const Header = ({ siteTitle }) => (
  <div className="navbar-box">
    <Container>
      <h1>{siteTitle}</h1>
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
