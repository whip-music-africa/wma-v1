import * as React from 'react';
import {
    BrowserView,
    MobileView,
    // isBrowser,
    // isMobile
} from "react-device-detect";
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './styles/index.css'

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
                                <img alt="WHIP MUSIC AFRICA" src={logo} id='landing-logo' />
                            </div>
                            <div id='landing-heading'>
                                <h1>Welcome To Whip Music</h1>
                            </div>
                            <div id='landing-btn-wrapper'>
                                <Link to='/Login'>
                                    <button className='bg-blue-500'>LOGIN</button>
                                </Link>
                                <Link to='register'>
                                    <button className='bg-blue-500'>REGISTER</button>
                                </Link>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </MobileView >
            </>
        )
    }
}