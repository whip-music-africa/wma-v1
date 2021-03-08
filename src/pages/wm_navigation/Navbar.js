import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../assets/images/sidebar/hamburger.png';
import { SidebarData } from './SidebarData';
import './styles/Navbar.css'
import logo from '../../assets/images/sidebar/toplogo.png'
import { BiChevronLeft } from 'react-icons/bi';
import onClickOutside from 'react-onclickoutside';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    Navbar.handleClickOutside = () => setSidebar(false);
    return (
        <>
            <div className='navbar'>
                <Link className='menu-bars'>
                    <img alt='' src={hamburger} onClick={showSidebar} />
                    <img alt='' src={logo} className='toplogo' />
                    <div></div>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link className='side-logo'>
                            <img alt='' src={logo} />
                            {/* <BiChevronLeft className='chevronleft' onClick={showSidebar} /> */}
                        </Link>
                        {/* <img alt='' src={hamburger} onClick={showSidebar} /> */}
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span id='navSpan'>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => Navbar.handleClickOutside
  };
export default onClickOutside(Navbar, clickOutsideConfig)
export function NavbarConnect() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className='navbar'>
                <Link to='/' className='menu-bars'>
                    <img alt='' src={hamburger} onClick={showSidebar} />
                    <div></div>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='/' className='side-logo'>
                            <img alt='' src={logo} />
                            <BiChevronLeft className='chevronleft' onClick={showSidebar} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}