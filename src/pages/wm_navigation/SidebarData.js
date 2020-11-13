import React from 'react';
import user from '../../assets/images/sidebar/user.png';
import feedback from '../../assets/images/sidebar/feedback.png';
import logo2 from '../../assets/images/sidebar/logo.png';
import gigs from '../../assets/images/sidebar/gigs.png';
import help from '../../assets/images/sidebar/help.png';
import logout from '../../assets/images/sidebar/logout.png';
import premium from '../../assets/images/sidebar/premium.png';

export const SidebarData = [
    {
        title: 'My Profile',
        path: '/profile',
        icon: <img alt='' src={user} />,
        cName: 'nav-text'
    },
    {
        title: 'Feedback',
        path: '/feedback',
        icon: <img alt='' src={feedback} />,
        cName: 'nav-text'
    },
    {
        title: 'Help Center',
        path: '/help',
        icon: <img alt='' src={help} />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <img alt='' src={logo2} />,
        cName: 'nav-text aboutbtn'
    },
    {
        title: 'My gigs',
        path: '/mygigs',
        icon: <img alt='' src={gigs} />,
        cName: 'nav-text'
    },
    {
        title: 'Activate Premium',
        path: '/premium',
        icon: <img alt='' src={premium} />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <img alt='' src={logout} />,
        cName: 'nav-text logoutbtn'
    }
]