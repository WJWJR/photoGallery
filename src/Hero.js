import React, { Component } from 'react';

class Hero extends Component {

// constructor(props){
//   super(props);
//   this.state = {
//     title: ["Photo Album", "Album One", "Photo One"]
//   }
// }


  render(props) {
    console.log(this.props);
    return(

        <div className="App-header">

          <h1>{this.props.title}</h1>

        </div>
    )
  }
}
Hero.propTypes = {
  title: React.PropTypes.array,
};
Hero.defaultProps = {
  title: "Photo Album"
}

export default Hero;
