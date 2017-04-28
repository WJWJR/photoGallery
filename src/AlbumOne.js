import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

class AlbumOne extends Component {

  render() {
    return(
      <div className="App">
        <div className="App-header">
          <h1>Album One</h1>
        </div>
        <div className="container ">

          <div className="row">

            <div className="col s3 aside">
              <aside>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AlbumOne">Album One</Link></li>
                <li><Link to="/AlbumTwo">Album Two</Link></li>
                <li><Link to="/AlbumThree">Album Three</Link></li>
                <li><Link to="/AlbumFour">Album Four</Link></li>
                <li><Link to="/AlbumFive">Album Five</Link></li>
                <li><Link to="/AlbumSix">Album Six</Link></li>
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
