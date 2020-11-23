import React from 'react';
import { NavbarConnect } from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import './connect.css';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import { loadRequests, loadUsers, sendRequest } from '../wm_actions/connects';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyLoader from '../../loader/loader';
import { professionConstants, countryConstants } from '../wm_constants/index';
import axios from 'axios'

class Connect extends React.Component {
    state = {
        requestId: ""
    }
    static propTypes = {
        areRequests: PropTypes.bool,
        connectRequests: PropTypes.array.isRequired,
        allUsers: PropTypes.array.isRequired,
        fetchingRequests: PropTypes.bool,
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.sendRequest(this.state.requestId);
        console.log(this.state.requestId)
    };
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    // sendRequest = () => {
    //     const key = '9aff29f7206fbd2cbdb6aee27bde2dddb78a5680';

    //     // Headers
    //     const config = {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }

    //     // If token, add to headers config
    //     if (key) {
    //         config.headers["Authorization"] = `Token ${key}`
    //     };
    //     const requestUrl = this.state.requestId
    //     axios
    //         .post(`https://api.whipafrica.com/v1/connections/users/connectrequests/${requestUrl}/`, config)
    //         .then(res => {
    //             // dispatch({
    //             //     payload: res.data
    //             // })
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             console.log(key)
    //         })
    // }
    componentDidMount() {
        this.props.loadRequests();
        this.props.loadUsers();
        console.log(this.props.key)
    } s
    render() {
        if (this.props.isFetching) {
            return <div id='loading-wrapper'>
                <div id='loading-internal'>
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                </div>
            </div>
        }
        const { requestId } = this.state;
        return (
            <>
                <NavbarConnect />
                <div className='connect-wrapper'>
                    <div id='connect-headingbar'>
                        <p>Connection invitations</p>
                    </div>
                    <div id='connect-invite-wrap'>
                        <Card id='connection-invite-card' className='connect-Card-Root'>
                            <CardHeader
                                avatar={
                                    <Avatar />
                                }
                                title="Name Goes Here"
                                subheader='Subheading goes Here'
                                id='connection-invite-head'
                            >
                            </CardHeader>
                            <div id='connect-invites-btns-wrapper'>
                                <CardContent id='connect-invites-btns'>
                                    <button id='connect-accept-btn'><CheckIcon /></button>
                                    <button id='connect-decline-btn'><CloseIcon /></button>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                    <div id='connect-invite-wrap'>
                        <Card id='connection-invite-card' className='connect-Card-Root'>
                            <CardHeader
                                avatar={
                                    <Avatar />
                                }
                                title="Name Goes Here"
                                subheader='Subheading goes Here'
                                id='connection-invite-head'
                            >
                            </CardHeader>
                            <div id='connect-invites-btns-wrapper'>
                                <CardContent id='connect-invites-btns'>
                                    <button id='connect-accept-btn'><CheckIcon /></button>
                                    <button id='connect-decline-btn'><CloseIcon /></button>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                    <div id='connect-headingbar'>
                        <p>Music professionals you may want to connect with</p>
                    </div>
                    <div id='music-connect-wraper'>
                        {this.props.allUsers.map(user => (
                            <form onSubmit={this.onSubmit}>
                                <Card key={user.id} id='connection-card'>
                                    <Avatar src={user.profile.avatar} id='music-connect-avatar' />
                                    <p id='music-connect-heading'>{user.name}</p>
                                    <p id='music-connect-subline'>
                                        {professionConstants.map(proC => (
                                            <p key={proC.id}>
                                                {
                                                    proC.id === user.profile.profession[0]
                                                        ? proC.name
                                                        : null
                                                }
                                            </p>
                                        ))}
                                    </p>
                                    <p key={user.id} id='music-connect-location'>{countryConstants.map(counC => (
                                        <p>
                                            {
                                                counC.id === user.country
                                                    ? counC.name
                                                    : null
                                            }
                                        </p>
                                    ))}</p>
                                    <p id='music-connect-commons'>10 common connections</p>
                                    <button value={user.id} name='requestId' id='music-connect-button' type='submit' onClick={this.onChange}>Connect</button>
                                </Card>
                            </form>
                        ))}
                    </div>
                    {/* {professionConstants.map(cons => (
                        <div>
                            <h1 key={cons.id}>
                                {cons.name}
                            </h1>
                        </div>
                    ))} */}
                </div>
                <BottomNav />
            </>
        )
    }
}
const mapStateToProps = state => ({
    connectRequests: state.connects.connectRequests,
    areRequests: state.connects.areRequests,
    allUsers: state.connects.allUsers,
    fetchingRequests: state.connects.fetchingRequests,
    requestId: state.connects.requestId,
})
export default connect(mapStateToProps, { loadRequests, loadUsers, sendRequest })(Connect);