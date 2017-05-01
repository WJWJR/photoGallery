import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Hero from './Hero';
import AlbumOne from './AlbumOne';
import AlbumTwo from './AlbumTwo';

class AlbumThree extends Component {

  constructor(){
    super();
    this.state = {
      photos:['aaron-burden.jpg', 'dorin-vancea.jpg', 'lemuel-butler.jpg']
    }
  }

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
                  <li><Link to="/AlbumOne">Album One</Link></li>
                  <li><Link to="/AlbumTwo">Album Two</Link></li>
                  <li><Link to="/AlbumThree">Album Three</Link></li>
                  <li><Link to="/AlbumFour">Album Four</Link></li>
                  <li><Link to="/AlbumFive">Album FIve</Link></li>
                  <li><Link to="/AlbumSix">Album Six</Link></li>
                </ul>

              </aside>
            </div>


            <div className="card col s9">

            <div className="row">
                <div className="col s4">
                  <div className="card">
                    <div className="card-image">
                      <img className="responsive-img" alt="#" width="500" src="./images/aaron-burden.jpg"/>
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
                      <img className="responsive-img" alt="#" width="500" src="./images/lemuel-butler.jpg"/>
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
                      <img className="responsive-img" alt="#" width="500" src="./images/dorin-vancea.jpg"/>
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
                    <img className="responsive-img" alt="#" width="500" src="./images/lemuel-butler.jpg"/>
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
                    <img className="responsive-img" alt="#" width="500" src="./images/dorin-vancea.jpg"/>
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
                    <img className="responsive-img" alt="#" width="500" src="./images/aaron-burden.jpg"/>
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

export default AlbumThree;
