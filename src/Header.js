import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <li><Link to="/">Home</Link></li>
          </header>
        </div>
      </Router>
    );
  }
}

export default Header;
