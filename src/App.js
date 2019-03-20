import React, { Component } from 'react';
import Intro from './intro/Intro';
import './App.css';
import './global.css'

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <div className="App">
        </div>
        <div className="static-footer-message">
          <a href="https://robh.herokuapp.com/" target="_blank" className="rob-rjs-link">Full Angular 7 version of this site</a>
        </div>
      </div>
    );
  }
}

export default App;
