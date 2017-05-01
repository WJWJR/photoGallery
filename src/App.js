import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import Header from './Header.js';
import Hero from './Hero.js';
import Home from './Home.js';
import AlbumOne from './AlbumOne.js';
import AlbumTwo from './AlbumTwo.js';
import AlbumThree from './AlbumThree.js';
import PhotoOne from './PhotoOne.js';


class App extends Component {
constructor(){
  super();
  this.state = {name: "Photo Album"}
}

  render() {

    return (

      <Router>
        <div>
          <Link to="/"> Home </Link>
          {/*< Route path ="/header" component={Header} />*/}
          <Route exact path="/" component={Home}
          albums={this.state.albums}
          photoPages={this.state.photoPages}
          />
          <Route path="/AlbumOne" component={AlbumOne}/>
          <Route path="/AlbumTwo" component={AlbumTwo}/>
          <Route path="/AlbumThree" component={AlbumThree}/>
          <Route path="/PhotoOne" component={PhotoOne}/>
        </div>
      </Router>

    )
  }
}

export default App;
