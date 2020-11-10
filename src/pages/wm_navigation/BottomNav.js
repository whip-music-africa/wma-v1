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
                <img src={Home} />
                <p>Home</p>
            </Link>
            <Link to='browse' id='browse-wrap'>
                <img id='browseimg' src={Browse} />
                <p>Browse</p>
            </Link>
            <Link>
                <img src={Share} />
                <p>Share</p>
            </Link>
            <Link to='/connect'>
                <img src={Connect} />
                <p>Connect</p>
            </Link>
            <Link>
                <img src={Chat} />
                <p>Chat</p>
            </Link>
        </div>
    )
}