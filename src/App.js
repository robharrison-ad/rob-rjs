import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Intro from './intro/Intro';
import Home from './Home/Home';
import './App.css';
import './global.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Intro} />
          <Route path="/home/" component={Home} />
        </Router>
        <div className="static-footer-message">
          <a href="https://robh.herokuapp.com/" target="_blank" className="rob-rjs-link">Full Angular 7 version of this site</a>
        </div>
      </div>
    );
  }
}

export default App;
