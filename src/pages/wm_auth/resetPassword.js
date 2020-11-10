import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import logo from '../../assets/Logo-2.png'
import './styles/resetPassword.css'

export default function ResetPassword() {
    return (
        <>
            <BrowserView>This is the Browser ResetPassword</BrowserView>
            <MobileView>
                <div id='reset-password-wrapper'>
                    <div id='reset-logo-wrapper'>
                        <img alt='WHIP MUSIC AFRICA' src={logo} id='reset-logo' />
                    </div>
                    <div id='reset-heading'>
                        <h1>Reset Password</h1>
                        <p>Enter your email address to get the link to reset your password</p>
                    </div>
                    <div id='reset-input'>
                        <input id='login-email' placeholder='Email address' />
                    </div>
                    <div id='reset-btn-wrapper'>
                        <input type="submit" value="Send Link" />
                    </div>
                </div>
            </MobileView>
        </>
    )
} 