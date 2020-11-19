import React from 'react';
import { NavbarConnect } from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import './connect.css';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import { loadRequests, loadUsers } from '../wm_actions/connects';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Connect extends React.Component {
    static propTypes = {
        areRequests: PropTypes.bool,
        connectRequests: PropTypes.array.isRequired,
        allUsers: PropTypes.array.isRequired
    }
    componentDidMount() {
        this.props.loadRequests();
        this.props.loadUsers();
    }
    render() {
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
                            <Card key={user.id} id='connection-card'>
                                <Avatar src={user.profile.avatar} id='music-connect-avatar' />
                                <p id='music-connect-heading'>{user.name}</p>
                                <p id='music-connect-subline'>{user.profile.profession[0]}</p>
                                <p id='music-connect-location'>{user.country}</p>
                                <p id='music-connect-commons'>10 common connections</p>
                                <button>Connect</button>
                            </Card>
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
    allUsers: state.connects.allUsers
})
export default connect(mapStateToProps, { loadRequests, loadUsers })(Connect);