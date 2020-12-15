import React from 'react';
import ReloadButton from './ReloadButton.js';
import logo from '../assets/spacex-logo.png'


class Navbar extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <header>
      <div className="navbar">
        <div className="logoWrapper">
          <img className="navbarLogo" src={logo}/>
          <h3 className="navbarText">LAUNCHES</h3>
        </div>
          <div className="reloadButtonContainer">
          <ReloadButton reload={this.props.reload}/>
          </div>
      </div>
      </header>
    )
  }
}
export default Navbar;
