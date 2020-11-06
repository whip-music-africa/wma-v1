import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import logo from '../../assets/Logo-2.png'

export default function ResetPasswordSuccess() {
    return (
        <>
            <BrowserView>This is Browser ResetPasswordSuccess View</BrowserView>
            <MobileView>
                <div id='reset-password-wrapper'>
                    <div id='reset-logo-wrapper'>
                        <img src={logo} id='reset-logo' />
                    </div>
                    <div id='reset-heading'>
                        <h1>Reset Password</h1>
                    </div>
                    <div id='reset-input-wrapper'>
                        <input id='reset-password-input' placeholder='New Password' />
                        <input id='reset-password-input' placeholder='Confirm New Password' />
                    </div>
                    <div id='reset-btn-wrapper'>
                        <input type="submit" value="Reset Password" />
                    </div>
                </div>
            </MobileView>
        </>
    )
} 