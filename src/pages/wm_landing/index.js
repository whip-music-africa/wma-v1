import * as React from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import logo from '../../assets/Logo.png'
import './styles/index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Landing extends React.Component {
    render() {
        return (
            <>
                <BrowserView>
                    <h1>This is the BrowserView</h1>
                </BrowserView>
                <MobileView>
                    <div id='landingbg'>
                        <div id='overlay'>
                            <div id='logo-wrapper'>
                                <img src={logo} id='landing-logo' />
                            </div>
                            <div id='landing-heading'>
                                <h1>Welcome To Whip Music</h1>
                            </div>
                            <Router>
                                <div id='landing-btn-wrapper'>
                                    <Link to='/Login'>
                                        <button className='bg-blue-500'>LOGIN</button>
                                    </Link>
                                    <button className='bg-blue-500'>REGISTER</button>
                                </div>
                            </Router>
                            {/*  */}
                        </div>
                    </div>
                </MobileView>
            </>
        )
    }
}