import React, { Component } from 'react';
import './Subheadline.css';

class Subheadline extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

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
        <div className="page-subheadline-content themed r-shadow ">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Subheadline;