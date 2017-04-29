import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Hero from './Hero';

class AlbumOne extends Component {

  render() {
    console.log(this.props);
    return(
      <div className="App">
        <Hero />
        <div className="container ">

          <div className="row">

            <div className="col s3 aside">
              <aside>
                <ul>

                </ul>

              </aside>
            </div>


            <div className="card col s9">

            <div className="row">
                <div className="col s4">
                  <div className="card">
                    <div className="card-image">
                      <img src="/blah.png"/>
                      <span className="card-title"></span>
                    </div>
                    <div className="card-action">
                      <Link to="/PhotoOne"> Photo 1</Link>
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
                      <a href="/blah.png"> Photo 2</a>
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
                      <a href="#"> Photo 3</a>
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
                    <a href="/blah.png"> Photo 4</a>
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
                    <a href="/blah.png"> Photo 5</a>
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
                    <a href="#"> Photo 6</a>
                  </div>
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

export default AlbumOne;
