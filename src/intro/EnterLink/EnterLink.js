import React, { Component } from 'react';
import './EnterLink.css';

class EnterLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <div className="enter-link-wrapper">
          <div className="intro-enter-text-content">
            <span className="hover-glow">ENTER!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default EnterLink;