import React, { useState } from 'react';
import logo from "../images/logo.png"
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss'
const Header = () => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const showHideSidebar = () => {
        isSidebarShown ? setIsSidebarShown(false) : setIsSidebarShown(true)
    }
    return(
    <>
    <section className='header'>
        <i className="fas fa-bars" onClick={ () => { showHideSidebar() }}></i>
        <div className='menuText'>Menu</div>
        <img className="inshortsLogo" src={logo} alt="inshorts"/>
    </section>
    {
        isSidebarShown ? <><Sidebar isSidebarShown={isSidebarShown}/>
        <i className="fas fa-times" onClick={ () => { showHideSidebar() }}></i>
        <div className='closeText'>Close</div></> : ""
    }
    
    </>);
};

export default Header;
