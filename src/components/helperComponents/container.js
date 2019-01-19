import React from 'react';
import './container.sass';

/**
 * container has css to give wrap its children
 * in a container that has left and right margins
 */
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
