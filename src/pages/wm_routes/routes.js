import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../wm_auth/Login';
import Landing from '../wm_landing/index';
import Error from './error';
import SignUp from '../wm_auth/SignUp';
import ResetPassword from '../wm_auth/resetPassword';
import ResetPasswordSuccess from '../wm_auth/resetPasswordSuccess';
import PrivateRoute from '../wm_common/PrivateRoute'
import Home from '../wm_home/home';
import Connect from '../wm_connect/connect';
import Browse from '../wm_browse/browse.js';
import Posts from '../wm_posts/posts';
import professionUpdate from '../wm_auth/newUserFlow/professionUpdate';
import genreUpdate from '../wm_auth/newUserFlow/genreUpdate';

export default function RoutingWM() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/completeProfile' component={professionUpdate} />
                <Route exact path='/completeProfile2' component={genreUpdate} />
                <Route path='/connect' component={Connect} />
                <Route path='/browse' component={Browse} />
                <Route path='/posts' component={Posts} />
                <Route exact path='/landing' component={Landing} />
                <Route path='/Login' component={Login} />
                <Route path='/register' component={SignUp} />
                <Route path='/resetPassword' component={ResetPassword} />
                <Route path='/resetPasswordSuccess' component={ResetPasswordSuccess} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}