import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../assets/images/sidebar/hamburger.png';
import { SidebarData } from './SidebarData';
import './styles/Navbar.css'
import logo from '../../assets/images/sidebar/toplogo.png'
import { BiChevronLeft } from 'react-icons/bi';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <img src={hamburger} onClick={showSidebar} />
                    <img src={logo} className='toplogo' />
                    <div></div>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='side-logo'>
                            <img src={logo} />
                            <BiChevronLeft className='chevronleft' onClick={showSidebar} />
                        </Link>
                        {/* <img src={hamburger} onClick={showSidebar} /> */}
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