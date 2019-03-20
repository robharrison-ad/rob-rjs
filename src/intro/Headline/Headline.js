import React, { Component } from 'react';
import gotcode from '../../assets/images/gotcode-secondary-shadow.png'
import './Headline.css';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <div className="page-headline-content intro-headline-content">
          <img src={gotcode} alt="Got Code?" />
        </div>
      </div>
    );
  }
}

export default Headline;