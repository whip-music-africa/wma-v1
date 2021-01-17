import React from 'react';
import arrowBack from '../../../assets/images/Profile/arrowBack.png';
import './editProfile.css';
import { withRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar'
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

class EditProfile extends React.Component {
    state = {
        activeTab: true,
        content: null,
        value: 0
    }
    profile = () => {
        return (
            <div>
                <p>
                    This is My Pinned Posts
                </p>
            </div>
        )
    }
    account = () => {
        return (
            <div>
                <p>
                    This is My Videos
                </p>
            </div>
        )
    }
    password = () => {
        return (
            <div>
                <p>
                    This is My Recommendations
                </p>
            </div>
        )
    }
    changeData = (value) => {
        this.setState({ content: value });
    }
    handleChange = (index) => {
        this.setState({ value: index })
    }
    render() {
        return (
            <div>
                <div id='editTopBar'>
                    <img alt='' src={arrowBack} onClick={this.props.history.goBack} />
                    <h1>Edit</h1>
                </div>
                <div id='profileAppBar'>
                    <AppBar id='appB' position='relative' color='transparent'>
                        <Tabs
                            value={this.state.value}
                            variant='scrollable'
                            ScrollButtons='auto'
                            textColor='#34529E'
                            indicatorColor='primary'
                        >
                            {/* <Tab activeTab={this.state.activeTab} id='editProfileAppBarTab' label='profile' onClick={() => this.changeData(this.profile())} />
                            <Tab id='editProfileAppBarTab' label='account' onClick={() => this.changeData(this.account())} />
                            <Tab id='editProfileAppBarTab' label='password' onClick={() => this.changeData(this.password())} /> */}
                            <Tab id='editProfileAppBarTab' label='Profile' onClick={() => this.handleChange(0)} />
                            <Tab id='editProfileAppBarTab' label='Account' onClick={() => this.handleChange(1)} />
                            <Tab id='editProfileAppBarTab' label='Password' onClick={() => this.handleChange(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={this.state.value} index={0}>This is the Profile Editing Section</TabPanel>
                    <TabPanel value={this.state.value} index={1}>This is the Account Section</TabPanel>
                    <TabPanel value={this.state.value} index={2}>This is the Password Editing Section</TabPanel>
                </div>
                <div>
                    <p>{this.state.content}</p>
                </div>
            </div >
        )
    }
}

export default EditProfile