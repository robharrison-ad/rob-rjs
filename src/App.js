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
      </div>
    );
  }
}

export default App;
