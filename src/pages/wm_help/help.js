import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import './help.css'
import emailHelp from '../../assets/images/help/emailHelp.png';
import smartphoneHelp from '../../assets/images/help/smartphoneHelp.png';
import instagramHelp from '../../assets/images/help/instagramHelp.png';
import facebookHelp from '../../assets/images/help/facebookHelp.png';
class Help extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div id='helpPageContainer'>
                    <h1 id='helpPageHeading'>Help center</h1>
                    <p id='helpPagePara'>You can reach us on:</p>
                </div>
                <div id='helpFirstSectionContainer'>
                    <div id='helpFirstSection'>
                        <div>
                            <img alt='Email Image' src={emailHelp} id='helpEmailImg' />
                            <p>product@whipmusicafrica.com</p>
                        </div>
                        <div>
                            <img alt='Smartphone Image' src={smartphoneHelp} id='helpSmartphoneImg' />
                            <p>+23057685507</p>
                        </div>
                    </div>
                </div>
                <div id='helpSecondSectionContainer'>
                    <p>Follow us on social media</p>
                    <div id='helpSecondSection'>
                        <div id='helpSocialImgs'>
                            <img alt='' src={instagramHelp} />
                            <img alt='' src={facebookHelp} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Help