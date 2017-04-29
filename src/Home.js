import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Hero from './Hero';

class Home extends Component {

  render() {

    return (
      <div className="App">
        <Hero/>
        <div className="container ">

          <div className="card">

          <div className="row">
              <div className="col s4">
                <div className="card">
                  <div className="card-image">
                    <img src="/blah.png"/>
                    <span className="card-title"></span>
                  </div>
                  <div className="card-action">
                    <Link to="/AlbumOne"> Album 1</Link>
                  </div>
                </div>
              </div>

              <div className="col s4">
                <div className="card">
                  <div className="card-image">
                    <img src="/blah.png"/>
                    <span className="card-title"></span>
                  </div>
                  <div className="card-action">
                    <a href="/blah.png"> Album 2</a>
                  </div>
                </div>
              </div>

              <div className="col s4">
                <div className="card">
                  <div className="card-image">
                    <img src="/blah.png"/>
                    <span className="card-title"></span>
                  </div>
                  <div className="card-action">
                    <a href="#"> Album 3</a>
                  </div>
                </div>
              </div>

          </div>

          <div className="row">
            <div className="col s4">
              <div className="card">
                <div className="card-image">
                  <img src="/blah.png"/>
                  <span className="card-title"></span>
                </div>
                <div className="card-action">
                  <a href="/blah.png"> Album 4</a>
                </div>
              </div>
            </div>

            <div className="col s4">
              <div className="card">
                <div className="card-image">
                  <img src="/blah.png"/>
                  <span className="card-title"></span>
                </div>
                <div className="card-action">
                  <a href="/blah.png"> Album 5</a>
                </div>
              </div>
            </div>

            <div className="col s4">
              <div className="card">
                <div className="card-image">
                  <img src="/blah.png"/>
                  <span className="card-title"></span>
                </div>
                <div className="card-action">
                  <a href="#"> Album 6</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        </div>

      </div>
    )
  }
}

export default Home
