import React, { Component } from 'react';

class Hero extends Component {

  render() {
    return(

        <div className="App-header">
          {this.props.cat.album0.map((album) => <h1>{album}</h1>)}
          <h1>Photo Albums</h1>
        </div>
    )
  }
}

export default Hero;
