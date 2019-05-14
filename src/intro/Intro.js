import React, { Component } from 'react';
import './Intro.css';
import '../global.css'
import gotcode from '../assets/images/gotcode-secondary-shadow.png'

import Headline from '../common/Headline/Headline';
import EnterLink from './EnterLink/EnterLink';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="bg-frame intro-bg-frame"></div>
        <div className="page-wrapper intro-page-wrapper">
          <Headline image={gotcode} altText="Got Code?" className="intro-headline-content" />
          <EnterLink />
        </div>
      </div>
    );
  }
}

export default Intro;