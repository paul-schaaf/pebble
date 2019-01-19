import React from 'react';

import Container from './helperComponents/container';
import Card from './card';

import './praiseSection.sass';

const PraiseSection = () => (
  <div className="praise-section">
    <Container>
      <p className="praise-section__heading">Praise</p>
    </Container>
    <div className="praise-section__scroll-box">
      <div className="praise-section__scroll-box__card-box--one">
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <div className="praise-section__scroll-box__card-box--one__placeholder" />
      </div>
      <div className="praise-section__scroll-box__card-box">
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
        <Card type="praise">hi</Card>
      </div>
    </div>
  </div>
);

export default PraiseSection;
