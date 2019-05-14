import React, { Component } from 'react';
import './Headline.css';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <div className="headline-content">
          {this.props.image && <img src={this.props.image} alt={this.props.altText} />}
          <div className="headline-text">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default Headline;