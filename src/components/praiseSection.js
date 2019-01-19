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
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👩‍🦳
            </span>
          </p>
          <p className="card--praise__praise-text">Amazing tool!</p>
          <p className="card--praise__praise-author">- @Jayqueline</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              🤖
            </span>
          </p>
          <p className="card--praise__praise-text">Beep Boop.</p>
          <p className="card--praise__praise-author">- @Mr. Robot</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👨‍🦳
            </span>
          </p>
          <p className="card--praise__praise-text">Spectacular!</p>
          <p className="card--praise__praise-author">- @Bob</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👵🏻
            </span>
          </p>
          <p className="card--praise__praise-text">I love this thing!</p>
          <p className="card--praise__praise-author">- @grandma</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👩🏾‍🦱
            </span>
          </p>
          <p className="card--praise__praise-text">Fantastic Features!</p>
          <p className="card--praise__praise-author">- @annie</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              🧟
            </span>
          </p>
          <p className="card--praise__praise-text">Nice work, yummy!</p>
          <p className="card--praise__praise-author">- @theFriendlyZombie</p>
        </Card>
        <div className="praise-section__scroll-box__card-box--one__placeholder" />
      </div>
      <div className="praise-section__scroll-box__card-box">
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👩🏻
            </span>
          </p>
          <p className="card--praise__praise-text">So great and simple!</p>
          <p className="card--praise__praise-author">- @Dnice</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              🎅
            </span>
          </p>
          <p className="card--praise__praise-text">Pebble is the bomb!</p>
          <p className="card--praise__praise-author">- @Santa</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👨🏾
            </span>
          </p>
          <p className="card--praise__praise-text">Awesome stuff!</p>
          <p className="card--praise__praise-author">- @Jack</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👩🏻‍🦰
            </span>
          </p>
          <p className="card--praise__praise-text">I've fallen in love!</p>
          <p className="card--praise__praise-author">- @hannah</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👨‍🔬
            </span>
          </p>
          <p className="card--praise__praise-text">Just Sublime!</p>
          <p className="card--praise__praise-author">- @Lance</p>
        </Card>
        <Card type="praise">
          <p className="card--praise__praise-emoji">
            <span role="img" aria-label="praise emoji">
              👨🏾‍💻
            </span>
          </p>
          <p className="card--praise__praise-text">Magnificent!</p>
          <p className="card--praise__praise-author">- @henry</p>
        </Card>
      </div>
    </div>
  </div>
);

export default PraiseSection;
