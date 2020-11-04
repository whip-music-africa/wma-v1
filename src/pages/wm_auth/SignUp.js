import React, {useState} from 'react'
import {countryConstants} from "../wm_constants";
import signUpService from "../wm_services/signUpService";

const SignUp = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        country: '',
        password1: '',
        password2: '',
    })

    const [submitted, setSubmitted] = useState(false);
    const [registering, setRegistering] = useState(false);
    const [similarPassword] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        if (user.name && user.country && user.email && user.password1 && user.password2 && similarPassword) {
            setRegistering(true);
            signUpService(user.name, user.email, user.country, user.password1, user.password2);
            setRegistering(false);
        }
    }
    const getUserData = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value })
    }

    return (
        <div className="SignUp">
            <form name="form" className="" onSubmit={handleSubmit}>
                <div className="">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your Name" name="name"
                           onChange={getUserData}/>
                    {submitted && !user.name &&
                    <div className="help-block text-danger">First Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Country of residence</label>
                    <select className="form-control" name="country" onChange={getUserData}
                            id="countryConstants">
                        <option value="">Select country</option>
                        {Object.entries(countryConstants).map((k, v) => <option value={k[0]}>{k[1]}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" name="email"
                           placeholder='Input your email address'
                           onChange={getUserData}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="*******" className="form-control" name="password1"
                           onChange={getUserData}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="*******" className="form-control" name="password2"
                           onChange={getUserData}/>
                </div>
                <br/>
                <div className="form-group">
                    <button className="btn btn-info login-btn btn-large" type="button"
                            onClick={handleSubmit}>{!registering && 'Sign Up'}</button>
                </div>
                <div className="col-lg-8">
                    <p className="next-page-link mt-5">Do you have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
