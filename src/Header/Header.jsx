import React from 'react';
import logo from "../images/logo.png"
import './Header.scss'
const Header = () => {
  return(
  <section className='header'>
      <i className="fas fa-bars"></i>
      <div className='menuText'>Menu</div>
      <img className="inshortsLogo" src={logo} alt="inshorts"/>
  </section>);
};

export default Header;
