import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import subscriptions from '../../assets/images/share/subscriptions.png';
import photo from '../../assets/images/share/photo.png';
import share from '../../assets/images/share/share.png';
import microphone from '../../assets/images/share/microphone.png';
import './share.css';
import { Link } from 'react-router-dom';


class Share extends React.Component {
    render() {
        return (
            <div>
                <div id='navContainer'>
                    <Navbar />
                </div>
                <div id='shareContainer'>
                    <h1>What do you want to share?</h1>
                    <div id='shareFirstSection'>
                        <Link to='/shareVideo' id='shareVideo'>
                            <img alt='' src={subscriptions} />
                            <p>Video</p>
                        </Link>
                        <Link to='/sharePhoto' id='sharePhoto'>
                            <img alt='' src={photo} />
                            <p>Photo</p>
                        </Link>
                    </div>
                    <div id='shareSecondSection'>
                        <Link to='/sharePost' id='sharePost'>
                            <img alt='' src={share} />
                            <p>Post</p>
                        </Link>
                        <Link to='/shareGig' id='shareGig'>
                            <img alt='' src={microphone} />
                            <p>Gig</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <BottomNav />
                </div>
            </div>
        )
    }
}

export default Share 