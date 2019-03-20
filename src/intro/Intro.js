import React, { Component } from 'react';
import './Intro.css';
import '../global.css'
import Headline from './Headline/Headline';
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
          <Headline />
          <EnterLink />
        </div>
      </div>
    );
  }
}

export default Intro;