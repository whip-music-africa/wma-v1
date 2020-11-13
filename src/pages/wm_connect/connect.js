import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import './connect.css';

export default function Connect() {
    return (
        <>
            <Navbar />
            <div className='connect-wrapper'>
                <h1>This is the Connect Page</h1>
            </div>
            <BottomNav />
        </>
    )
}