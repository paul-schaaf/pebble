import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import './layout.sass';

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Pebble" />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
