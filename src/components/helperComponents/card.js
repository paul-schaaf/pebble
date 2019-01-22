import React from 'react';

import './card.sass';

const Card = ({ type, children }) => (
  <div className={`card card--${type}`}>{children}</div>
);

export default Card;
