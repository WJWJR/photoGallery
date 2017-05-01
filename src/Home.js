import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Hero from './Hero';

class Home extends Component {

  constructor(){
    super();
    this.state = {}
  }

  render(props) {

    return (
      <div className="App">
        <Hero/>
        <div className="container ">

          <div className="card">

            <section>

          <div className="row">

              <div className="col s4">
                <div className="card">
                  <div className="card-image">
                    <img className="responsive-img" alt="#" width="450" src="./images/aaron-burden.jpg"/>
                  </div>
                  <div className="card-action">
                    <Link to="/AlbumOne"> Album 1</Link>
                  </div>
                </div>
              </div>

              <div className="col s4">
                <div className="card">
                  <div className="card-image">
                    <img className="responsive-img" alt="#" width="500" src="./images/dorin-vancea.jpg"/>
                  </div>
                  <div className="card-action">
                    <Link to="/AlbumTwo"> Album 2</Link>
                  </div>
                </div>
              </div>

              <div className="col s4">
                <div className="card">
                  <div className="card-image">
                    <img className="responsive-img" alt="#" width="500" src="./images/lemuel-butler.jpg"/>
                  </div>
                  <div className="card-action">
                    <Link to="/AlbumThree"> Album 3</Link>
                  </div>
                </div>
              </div>
            </div>


<div className="row">


          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img className="responsive-img" alt="#" width="500" src="./images/dorin-vancea.jpg"/>
              </div>
              <div className="card-action">
                <Link to="/AlbumFour"> Album 4</Link>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img className="responsive-img" alt="#" width="500" src="./images/lemuel-butler.jpg"/>
              </div>
              <div className="card-action">
                <Link to="/AlbumFive"> Album 5</Link>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img className="responsive-img" alt="#" width="500" src="./images/aaron-burden.jpg"/>
              </div>
              <div className="card-action">
                <Link to="/AlbumSix"> Album 6</Link>
              </div>
            </div>
          </div>


      </div>
    </section>


        </div>

        </div>

      </div>
    )
  }
}
// Home.propTypes ={
//   imgsrc: React.PropTypes.string,
//   link: React.PropTypes.string,
//   albumNumber: React.PropTypes.number
// }
// Home.defaultProps = {
//   imgsrc:
// }

export default Home
// src="./images/aaron-burden.jpg"
