import React, { useState } from 'react';
import logo from "../images/logo.png"
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss'
const Header = () => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const showHideSidebar = () => {
        console.log("isSidebarShown " + isSidebarShown)
        console.log("Triggered")
        isSidebarShown ? setIsSidebarShown(false) : setIsSidebarShown(true)
    }
    return(
    <>
    <section className='header'>
        <i className="fas fa-bars" onClick={ () => { showHideSidebar() }}></i>
        <div className='menuText'>Menu</div>
        <img className="inshortsLogo" src={logo} alt="inshorts"/>
    </section>
    <Sidebar isSidebarShown={isSidebarShown}/>
    </>);
};

export default Header;
