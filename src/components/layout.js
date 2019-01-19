import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import './layout.sass';

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Pebble" />
    <div>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
