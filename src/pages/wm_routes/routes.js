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
import Profile from '../wm_profile/profile';
import Share from '../wm_share/share';
import Feedback from '../wm_feedback/feedback';
import Help from '../wm_help/help';
import About from '../wm_about/about';
import AllUsers from '../wm_allUsers/allUsers';
import PersonProfile from '../wm_profile/personProfile';
import EditProfile from '../wm_profile/editProfile/editProfile';
import ShareVideo from '../wm_share/shareComponents/shareVideo';
import SharePost from '../wm_share/shareComponents/sharePost';
import SharePhoto from '../wm_share/shareComponents/sharePhoto';
import ShareGig from '../wm_share/shareComponents/shareGig';


export default function RoutingWM() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <PrivateRoute exact path='/completeProfile' component={professionUpdate} />
                <PrivateRoute exact path='/completeProfile2' component={genreUpdate} />
                <PrivateRoute path='/share' component={Share} />
                <PrivateRoute path='/help' component={Help} />
                <PrivateRoute path='/feedback' component={Feedback} />
                <PrivateRoute path='/connect' component={Connect} />
                <PrivateRoute path='/browse' component={Browse} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <PrivateRoute path='/posts' component={Posts} />
                <PrivateRoute path='/about' component={About} />
                <PrivateRoute path='/allusers' component={AllUsers} />
                <PrivateRoute path='/editProfile' component={EditProfile} />
                <PrivateRoute path='/shareVideo' component={ShareVideo} />
                <PrivateRoute path='/sharePost' component={SharePost} />
                <PrivateRoute path='/sharePhoto' component={SharePhoto} />
                <PrivateRoute path='/shareGig' component={ShareGig} />
                <Route path='/profile/:id' component={PersonProfile} />
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