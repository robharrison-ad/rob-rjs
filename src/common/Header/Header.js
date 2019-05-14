import React, { Component } from 'react';
import rob from '../../assets/images/rh-36-cabin.png';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="header-wrapper">
        <Navbar expand="lg">
          <div className="header-nav-upper">
            <Navbar.Brand href="/">
              <img src={rob} className="rob-navbar-img" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="top-menu-link" href="/home">Home</Nav.Link>
              <Nav.Link className="top-menu-link" href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div >
    );
  }
}

export default Header;