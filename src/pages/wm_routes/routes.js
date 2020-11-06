import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../wm_auth/Login';
import Landing from '../wm_landing/index';
import Error from './error';
import SignUp from '../wm_auth/SignUp';
import ResetPassword from '../wm_auth/resetPassword';
import ResetPasswordSuccess from '../wm_auth/resetPasswordSuccess';
import PrivateRoute from '../wm_common/PrivateRoute'

export default function RoutingWM() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={Landing} />
                <Route path='/Login' component={Login} />
                <Route path='/register' component={SignUp} />
                <Route path='/resetPassword' component={ResetPassword} />
                <Route path='/resetPasswordSuccess' component={ResetPasswordSuccess} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}