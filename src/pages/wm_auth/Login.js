import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import loginService from "../wm_services/loginService";
import './styles/login.css';
import logo from '../../assets/Logo.png'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../wm_actions/auth';

class Login extends React.Component {
    state = {
        email: "",
        password: "",
    }
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email,
            this.state.password);
    };

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    // const { handleAuth } = props;

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // setFields = (event) => {
    //     if (event.target.name === "email") {
    //         setEmail(event.target.value);
    //     }
    //     if (event.target.name === "password") {
    //         setPassword(event.target.value);
    //     }
    // }
    // handleChange = (event) => {
    //     setFields(event);
    // };

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     const response = await loginService(email, password);
    //     console.error("Not implemented!!!")

    //     if (response.key) {

    //         console.log("success", response.key);
    //     } else {
    //         console.log("failed to login", response.non_field_errors);
    //     }
    // };
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        const { email, password } = this.state;
        return (
            <>
                <BrowserView> This is Browser Login Page</BrowserView>
                <MobileView>
                    <form onSubmit={this.onSubmit}>
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
                                    <input value={email} name='email' onChange={this.onChange} id='login-email' placeholder='input your email address' />
                                    <p>Password</p>
                                    <input id='login-email' onChange={this.onChange} value={password} name="password" placeholder='input your password' />
                                </div>
                                <div id='login-btn-wrapper'>
                                    <input type="submit" value="LOGIN" />
                                    <Link><p>Forgot Password?</p></Link>
                                </div>
                                <div id='login-create-wrapper'>
                                    <p>Don't have an account?</p>
                                    <Link to='/register'><button>Create</button></Link>
                                </div>
                            </div>
                        </div>
                    </form>
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
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

// const mapDispatchToProps = dispatch => {
//     return {};
// }

export default connect(mapStateToProps, { login })(Login);