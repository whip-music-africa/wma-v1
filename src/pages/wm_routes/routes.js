import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../wm_auth/Login';
import Landing from '../wm_landing/index';
import Error from './error';
import SignUp from '../wm_auth/SignUp';

export default function RoutingWM() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/Login' component={Login} />
                <Route path='/register' component={SignUp} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}