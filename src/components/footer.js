import React from 'react';

import pebbleIcon from '../images/header_oval.svg';

import './footer.sass';

const Footer = () => (
  <div className="footer-section">
    <div className="footer-section__box">
      <p className="footer-section__box__heading">
        <img
          alt="pebble icon"
          className="footer-section__box__pebble"
          src={pebbleIcon}
        />
        Pebble
      </p>
      <p className="footer-section__box__info-text">
        Solving key issues
        <br />
        the stone industry is
        <br />
        facing today
      </p>
    </div>
    <div className="footer-section__box">
      <p className="footer-section__box__heading">Links</p>
      <p className="footer-section__box__footer-link">Download for Mac</p>
      <p className="footer-section__box__footer-link">Download for Windows</p>
      <p className="footer-section__box__footer-link">Download for iOS</p>
      <p className="footer-section__box__footer-link">Download for Android</p>
    </div>
    <div className="footer-section__box">
      <p className="footer-section__box__heading">Company</p>
      <p className="footer-section__box__footer-link">About</p>
      <p className="footer-section__box__footer-link">Career</p>
      <p className="footer-section__box__footer-link">Media Kit</p>
      <p className="footer-section__box__footer-link">Blog</p>
    </div>
    <div className="footer-section__box footer-section__box--last">
      <p className="footer-section__box__heading">Contact</p>
      <p className="footer-section__box__footer-link">Livechat</p>
      <p className="footer-section__box__footer-link">Twitter</p>
      <p className="footer-section__box__footer-link">Facebook</p>
      <p className="footer-section__box__footer-link">Email</p>
    </div>
  </div>
);

export default Footer;
