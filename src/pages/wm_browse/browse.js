import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import './styles/browse.css';
import youtubeBrowse from '../../assets/images/browse/youtubeBrowse.png';
import studentBrowse from '../../assets/images/browse/studentBrowse.png';
import microphoneBrowse from '../../assets/images/browse/microphoneBrowse.png';
import { Link } from 'react-router-dom';

export default function Browse() {
    return (
        <>
            <Navbar />
            <div className='browse-wrapper'>
                <h1>Browse</h1>
                <div id='browseBtns'>
                    <div id='videoBrowseBtn'>
                        <Link to='/connect'>
                            <img alt='' src={youtubeBrowse} />
                            <p>Videos</p>
                        </Link>
                    </div>
                    <div id='musicProfessionalBtn'>
                        <Link to='/allUsers'>
                            <img alt='' src={studentBrowse} />
                            <p>Music professionals</p>
                        </Link>
                    </div>
                    <div id='gigsBrowseBtn'>
                        <Link to='/gigs'>
                            <img alt='' src={microphoneBrowse} />
                            <p>Gigs</p>
                        </Link>
                    </div>
                </div>
            </div>
            <BottomNav />
        </>
    )
}

