import PropTypes from 'prop-types';
import React from 'react';

import './header.sass';

const Header = ({ siteTitle }) => (
  <div className="navbar-box">
    <div>
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
