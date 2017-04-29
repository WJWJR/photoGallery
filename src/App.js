import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import AlbumOne from './AlbumOne.js';
import PhotoOne from './PhotoOne.js';
import Hero from './Hero';

class App extends Component {

constructor (){
  super();
  this.state = {

  }
}


  render() {
    var cat = {
        album0: [ 'Photo Album','Album One', 'Album Two', 'Album Three', 'Album Four', 'Album Five', 'Album Six' ]
    };
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
