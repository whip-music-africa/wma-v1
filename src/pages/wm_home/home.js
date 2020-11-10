import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import './styles/home.css'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='home-wrapper'>
                <h1> This is the Home Page</h1>
            </div>
            <BottomNav />
        </div>
    )
}