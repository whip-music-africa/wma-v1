import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
// import loginService from "../wm_services/loginService";
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
                                    <img alt="WHIP MUSIC AFRICA" src={logo} id='landing-logo' />
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
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);