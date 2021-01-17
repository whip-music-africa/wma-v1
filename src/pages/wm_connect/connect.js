import React from 'react';
import { NavbarConnect } from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import './connect.css';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import { loadRequests, sendRequest, updateSentRequest } from '../wm_actions/connects';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyLoader from '../../loader/loader';
import { professionConstants, countryConstants } from '../wm_constants/index';
import axios from 'axios'
import { Link } from 'react-router-dom';

const mergeById = (a1, a2) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.receiver === itm.id) && item),
        ...itm
    }));
class Connect extends React.Component {
    state = {
        requestId: "",
        merged: []
    }
    static propTypes = {
        areRequests: PropTypes.bool,
        connectRequests: PropTypes.array.isRequired,
        allUsers: PropTypes.array.isRequired,
        fetchingRequests: PropTypes.bool,
        sentConnectRequests: PropTypes.array.isRequired,
        fetchingSentRequest: PropTypes.bool.isRequired
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.sendRequest(this.state.requestId);
        this.props.updateSentRequest();
        console.log(this.props.updateSentRequest())
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            merged: mergeById(this.props.allUsers, this.props.sentConnectRequests)
        })

    };
    componentDidMount() {
        this.props.loadRequests();
        this.setState({
            merged: mergeById(this.props.allUsers, this.props.sentConnectRequests)
        })
        console.log(this.state.merged)
    }

    render() {
        if (this.props.fetchingSentRequest) {
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
                        {this.state.merged.map(user => (
                            <form onSubmit={this.onSubmit}>
                                <Card key={user.id} id='connection-card'>
                                    <Link to={`/profile/${user.id}`}>
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
                                    </Link>
                                    {user.status === 'pending' ? <button value={user.id} name='requestId' id='music-connect-pendingBtn' onClick={this.onChange}>Pending</button> : <button value={user.id} name='requestId' id='music-connect-button' type='submit' onClick={this.onChange}>Connect</button>}
                                </Card>
                            </form>
                        ))}
                    </div>
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
    fetchingSentRequest: state.connects.fetchingSentRequest,
    sentConnectRequests: state.connects.sentConnectRequests,
})
export default connect(mapStateToProps, { loadRequests, sendRequest, updateSentRequest })(Connect);