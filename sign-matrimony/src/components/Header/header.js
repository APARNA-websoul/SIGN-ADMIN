import React from "react";
import './header.css'
import logo from '../../assets/logo.png'


function Header() {
    return (
      <div className="header">
        <div className="logo-img">
          <img src={logo} alt="logo"/>
        </div>
        <div className="logout">
        <a href="hdf">Logout</a>
        </div>
      </div>
    );
  }
  
  export default Header;