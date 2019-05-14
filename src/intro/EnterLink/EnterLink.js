import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
            <a href="https://robh.herokuapp.com/home" target="_blank">
              {/* <Link to="/home/" className="enter-link"> */}
              <span className="hover-glow">ENTER!</span>
              {/* </Link> */}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default EnterLink;