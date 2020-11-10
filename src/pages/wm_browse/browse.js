import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav'
import './styles/browse.css'

export default function Browse() {
    return (
        <>
            <Navbar />
            <div className='browse-wrapper'>
                <h1>This is the Browse Page</h1>
            </div>
            <BottomNav />
        </>
    )
}

