import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import loginService from "../wm_services/loginService";
import './styles/login.css';
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

export default function Login(props) {
    const { handleAuth } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setFields = (event) => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        }
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    }
    const handleChange = (event) => {
        setFields(event);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await loginService(email, password);

        if (response.key) {

            console.log("success", response.key);
        } else {
            console.log("failed to login", response.non_field_errors);
        }
    };

    return (
        <>
            <BrowserView> This is Browser Login Page</BrowserView>
            <MobileView>
                <div id='login-wrapper'>
                    <div id='overlay'>
                        <div id='logo-wrapper'>
                            <img src={logo} id='landing-logo' />
                        </div>
                        <div id='login-welcometext'>
                            <p><span>Hi there,</span><br />Nice to see you again</p>
                        </div>
                        <div id='login-input'>
                            <p>Email address</p>
                            <input id='login-email' placeholder='input your email address' />
                            <p>Password</p>
                            <input id='login-email' placeholder='input your password' />
                        </div>
                        <div id='login-btn-wrapper'>
                            <input type="submit" value="LOGIN" onClick={handleLogin} />
                            <Link><p>Forgot Password?</p></Link>
                        </div>
                        <div id='login-create-wrapper'>
                            <p>Don't have an account?</p>
                            <Link to='/register'><button>Create</button></Link>
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
        // <div className="w-full max-w-xs">
        //     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        //         Email:{" "}
        //         <div className="mb-4">
        //             <input type="text" name="email" value={email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        //         </div>
        //         Password:{" "}
        //         <input
        //             type="password"
        //             name="password"
        //             onChange={handleChange}
        //             value={password}
        //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //         />
        //         <br />
        //         <br />
        //         <input type="submit" value="Login" onClick={handleLogin} />
        //     </form>
        // </div>

    );
}
