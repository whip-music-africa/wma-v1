import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import { countryConstants } from "../wm_constants";
// import signUpService from "../wm_services/signUpService";
import { Formik, Form, Field } from 'formik';
// import { CountryDropdown } from 'react-country-region-selector';
import logo from '../../assets/Logo.png'
import './styles/register.css'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
    state = {
        name: '',
        email: '',
        country: '',
        password1: '',
        password2: '',
    }
    onSubmit = e => {
        e.preventDefault();
        console.log('submit')
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })
    // const [user, setUser] = useState({
    //     name: '',
    //     email: '',
    //     country: '',
    //     password1: '',
    //     password2: '',
    // })

    // const [submitted, setSubmitted] = useState(false);
    // const [registering, setRegistering] = useState(false);
    // const [similarPassword] = useState(true);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setSubmitted(true);
    //     if (user.name && user.country && user.email && user.password1 && user.password2 && similarPassword) {
    //         setRegistering(true);
    //         signUpService(user.name, user.email, user.country, user.password1, user.password2);
    //         setRegistering(false);
    //     }
    // }
    // const getUserData = (e) => {
    //     const { value, name } = e.target;
    //     setUser({ ...user, [name]: value })
    // }
    render() {
        const { username, email, password1 } =
            this.state;
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
                                <div id='login-welcometext'>
                                    <p><span>Welcome to Whip Music Africa</span></p>
                                </div>
                                <Formik
                                    initialValues={{ email: '', password: '', country: '', name: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({ isSubmitting, values, handleChange, handleBlur }) => (
                                        <Form id='registerForm'>
                                            <p>Full Name</p>
                                            <Field placeholder='Your name' type='name' onChange={this.onChange} value={username} name='username' />
                                            <p>Country of Residency</p>
                                            <select className="form-control" name="country" onChange={this.onChange}
                                                id="countryConstants">
                                                <option value="">Select country</option>
                                                {Object.entries(countryConstants).map((k, v) => <option value={k[0]}>{k[1]}</option>)}
                                            </select>
                                            {/* <p>Country of Residency</p>
                                <CountryDropdown placeholder='Select your country' name='country' value={values.country}
                                    onChange={handleChange} onBlur={handleBlur} /> */}
                                            <p>Email address</p>
                                            <Field onChange={this.onChange} value={email} placeholder='Input your email address' type="email" name="email" />
                                            {/* <ErrorMessage name="email" component="div" /> */}
                                            <p>Password</p>
                                            <Field placeholder='Input your password' onChange={this.onChange} value={password1} type="password" name="password" />
                                            {/* <ErrorMessage name="password" component="div" /> */}
                                            <button type="submit" disabled={isSubmitting}>
                                                CONTINUE
                                </button>
                                        </Form>
                                    )}
                                </Formik>
                                <div id='register-create-wrapper'>
                                    <p>Don't have an account?</p>
                                    <Link to='/Login'>Login</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </MobileView>
            </>
            // <div className="SignUp">
            //     <form name="form" className="" onSubmit={handleSubmit}>
            //         <div className="">
            //             <label>Full Name</label>
            //             <input type="text" placeholder="Your Name" name="name"
            //                    onChange={getUserData}/>
            //             {submitted && !user.name &&
            //             <div className="help-block text-danger">First Name is required</div>
            //             }
            //         </div>
            //         <div className="form-group">
            //             <label>Country of residence</label>
            // <select className="form-control" name="country" onChange={getUserData}
            //         id="countryConstants">
            //     <option value="">Select country</option>
            //     {Object.entries(countryConstants).map((k, v) => <option value={k[0]}>{k[1]}</option>)}
            // </select>
            //         </div>
            //         <div className="form-group">
            //             <label>Email Address</label>
            //             <input type="email" className="form-control" name="email"
            //                    placeholder='Input your email address'
            //                    onChange={getUserData}/>
            //         </div>
            //         <div className="form-group">
            //             <label>Password</label>
            //             <input type="password" placeholder="*******" className="form-control" name="password1"
            //                    onChange={getUserData}/>
            //         </div>
            //         <div className="form-group">
            //             <label>Confirm Password</label>
            //             <input type="password" placeholder="*******" className="form-control" name="password2"
            //                    onChange={getUserData}/>
            //         </div>
            //         <br/>
            //         <div className="form-group">
            //             <button className="btn btn-info login-btn btn-large" type="button"
            //                     onClick={handleSubmit}>{!registering && 'Sign Up'}</button>
            //         </div>
            //         <div className="col-lg-8">
            //             <p className="next-page-link mt-5">Do you have an account? <a href="/login">Login</a></p>
            //         </div>
            //     </form>
            // </div>
        )
    }
}
export default SignUp;
