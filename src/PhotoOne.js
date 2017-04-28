import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

class PhotoOne extends Component {

  render() {
    return (

      <div className="App">

        <div className="App-header">
          <h1>Photo One</h1>
        </div>

        <div className="container ">

              <div className="card">

                  <Link to="AlbumOne" className="waves-effect waves-light btn">back to Album One</Link>


                          <div className="card-image">
                            <img src="/blah.png"/>
                            <span className="card-title"></span>
                          </div>

                      

            </div> {/*End card*/}

        </div> {/*End container*/}

      </div>
    )
  }
}

export default PhotoOne;
