import React from 'react';
import Home from '../../assets/images/bottomNav/home.png'
import Connect from '../../assets/images/bottomNav/connect.png'
import Share from '../../assets/images/bottomNav/share.png'
import Browse from '../../assets/images/bottomNav/browse.png'
import Chat from '../../assets/images/bottomNav/chat.png';
import './styles/BottomNav.css';
import { Link } from 'react-router-dom';

export default function BottomNav() {
    return (
        <div className='btmNav-wrapper'>
            <Link to='/'>
                <img alt='' src={Home} />
                <p>Home</p>
            </Link>
            <Link to='browse' id='browse-wrap'>
                <img alt='' id='browseimg' src={Browse} />
                <p>Browse</p>
            </Link>
            <Link to='/share'>
                <img alt='' src={Share} />
                <p>Share</p>
            </Link>
            <Link to='/connect'>
                <img alt='' src={Connect} />
                <p>Connect</p>
            </Link>
            <Link to='/'>
                <img alt='' src={Chat} />
                <p>Chat</p>
            </Link>
        </div>
    )
}