import React, { Component } from 'react';
import Header from '../common/Header/Header';
import Headline from '../common/Headline/Headline';
import Subheadline from '../common/Subheadline/Subheadline';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlineText: 'Application Developer',
      subheadlineText: 'Over a decade of professional experience designing and developiong custom web applications.'
    };
  }

  // ['Over a decade of ', <span className="accented">, 'professional experience', </span>, ' designing and developiong ', <span className="accented r-shadow">, 'custom web applications.', </span>]

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="Home">
        <div className="bg-frame home-bg-frame"></div>
        <Header />
        <div className="spacer spacer-top spacer-150"></div>
        <div className="home-page-content">
          <Headline className="" text={this.state.headlineText} />
          <Subheadline className="subheadline-content" text={this.state.subheadlineText} />
        </div>
      </div>
    );
  }
}

export default Home;