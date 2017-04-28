import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import AlbumOne from './AlbumOne.js';
import PhotoOne from './PhotoOne.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Link to="/"> Home </Link>
          {/*< Route path ="/header" component={Header} />*/}
          <Route exact path="/" component={Home} />
          <Route path="/AlbumOne" component={AlbumOne}/>
          <Route path="/PhotoOne" component={PhotoOne}/>
        </div>
      </Router>
    );
  }
}

export default App;
