import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { countryConstants } from "../wm_constants";
import logo from '../../assets/images/sidebar/logo.png';
import './styles/register.css';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../wm_actions/auth';
import { createMessage } from '../wm_actions/messages';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Success from '../../assets/images/Register/Modal/success.png';

class SignUp extends React.Component {
    state = {
        name: '',
        email: '',
        country: '',
        password1: '',
        password2: '',
        open: false
    };
    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        registerSuccessful: PropTypes.bool
    };
    onSubmit = e => {
        e.preventDefault();
        const { name, email, country, password1, password2 } = this.state;
        if (password1 !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Password do not match' })
        } else {
            const newUser = {
                name, email, country, password1, password2
            };
            this.props.register(newUser);
        }
    };
    handleOpen = () => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            open: false,
        })
    }
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        const { name, email, country, password1, password2 } = this.state;
        console.log(this.state.open)
        if (this.props.registerSuccessful) {
            return (
                <>
                    <BrowserView>This is the Browser Register Page</BrowserView>
                    <MobileView>
                        <form onSubmit={this.onSubmit}>
                            <div id='login-wrapper'>
                                <div id='overlay'>
                                    <div id='logo-wrapper'>
                                        <img alt="WHIP MUSIC AFRICA" src={logo} id='landing-logo' />
                                    </div>
                                    <div id='register-welcometext'>
                                        <p><span>Welcome to Whip Music Africa</span></p>
                                    </div>
                                    <div id='registerForm'>
                                        <p>Full Name</p>
                                        <input value={name} name='name' onChange={this.onChange} placeholder='Your Name' />
                                        <p>Country of Residency</p>
                                        <select className="form-control" name="country" type='choice' value={country} onChange={this.onChange}
                                            id="countryConstants">
                                            <option value="">Select country</option>
                                            {Object.entries(countryConstants).map((k, v) => <option value={k[0]}>{k[1]}</option>)}
                                        </select>
                                        <p>Email address</p>
                                        <input value={email} name='email' onChange={this.onChange} placeholder='input your email address' />
                                        <p>Password</p>
                                        <input type='password' onChange={this.onChange} value={password1} name="password1" placeholder='input your password' />
                                        <p>Confirm Password</p>
                                        <input type='password' onChange={this.onChange} value={password2} name="password2" placeholder='Confirm Your Password' />
                                    </div>
                                    <div id='login-btn-wrapper'>
                                        <input type="submit" value="CONTINUE" />
                                    </div>
                                    <div id='register-create-wrapper'>
                                        <p>Don't have an account?</p>
                                        <Link to='/Login'>Login</Link>
                                    </div>
                                </div>
                            </div>
                        </form >
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className='modal'
                            open={true}
                            onClose={this.handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={true}>
                                <div className='paper'>
                                    <img src={Success} />
                                    <h2 id="transition-modal-title">Success</h2>
                                    <p id="transition-modal-description">Check you email address for confirmation link</p>
                                    <Link to='/completeProfile'>Close</Link>
                                </div>
                            </Fade>
                        </Modal>
                    </MobileView >
                </>)
        } else {
            console.log(this.handleOpen)
            const { name, email, country, password1, password2 } = this.state;
            return (
                <>
                    <BrowserView>This is the Browser Register Page</BrowserView>
                    <MobileView>
                        <form onSubmit={this.onSubmit}>
                            <div id='login-wrapper'>
                                <div id='overlay'>
                                    <div id='logo-wrapper'>
                                        <img alt="WHIP MUSIC AFRICA" src={logo} id='landing-logo' />
                                    </div>
                                    <div id='register-welcometext'>
                                        <p><span>Welcome to Whip Music Africa</span></p>
                                    </div>
                                    <div id='registerForm'>
                                        <p>Full Name</p>
                                        <input value={name} name='name' onChange={this.onChange} placeholder='Your Name' />
                                        <p>Country of Residency</p>
                                        <select className="form-control" name="country" type='choice' value={country} onChange={this.onChange}
                                            id="countryConstants">
                                            <option value="">Select country</option>
                                            {Object.entries(countryConstants).map((k, v) => <option value={k[0]}>{k[1]}</option>)}
                                        </select>
                                        <p>Email address</p>
                                        <input value={email} name='email' onChange={this.onChange} placeholder='input your email address' />
                                        <p>Password</p>
                                        <input type='password' onChange={this.onChange} value={password1} name="password1" placeholder='input your password' />
                                        <p>Confirm Password</p>
                                        <input type='password' onChange={this.onChange} value={password2} name="password2" placeholder='Confirm Your Password' />
                                    </div>
                                    <div id='login-btn-wrapper'>
                                        <input type="submit" value="CONTINUE" />
                                    </div>
                                    <div id='register-create-wrapper'>
                                        <p>Don't have an account?</p>
                                        <Link to='/Login'>Login</Link>
                                    </div>
                                </div>
                            </div>
                        </form >
                    </MobileView >
                </>
            )
        }
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    registerSuccessful: state.auth.registerSuccessful
})

export default connect(mapStateToProps, { register, createMessage })(SignUp);