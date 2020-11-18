import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import './styles/login.css';
import logo from '../../assets/images/sidebar/logo.png';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, loadUser } from '../wm_actions/auth';
import store from "../wm_store/store";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        userId: ""
    }
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        users: PropTypes.string,
        profession: PropTypes.array,
        genre: PropTypes.array
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
            return <Redirect to='/' />
        }
        const { email, password } = this.state;
        return (
            <>
                <BrowserView>

                </BrowserView>
                <MobileView>
                    <form onSubmit={this.onSubmit}>
                        {/* {
                            this.props.genre.map(gen => (
                                <h1>{gen}</h1>
                            ))
                        } */}
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
                                    <input type='password' id='login-email' onChange={this.onChange} value={password} name="password" placeholder='input your password' />
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
    isAuthenticated: state.auth.isAuthenticated,
    users: state.auth.users,
    profession: state.auth.profession,
    genre: state.auth.genre
})

export default connect(mapStateToProps, { login, loadUser })(Login);