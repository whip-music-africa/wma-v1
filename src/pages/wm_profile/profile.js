import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import BGProfile from '../../assets/images/Profile/bg-profile.png';
import profile from './profile.css';
import Avatar from '@material-ui/core/Avatar';
import UserProfile from '../../assets/images/Profile/EllipseP.png'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../wm_actions/auth';
import { getPersonalPosts, getPersonalVideos } from '../wm_actions/posts';
import { genreConstants, countryConstants, professionConstants } from '../wm_constants/index';
import { numberOfConnections } from '../wm_actions/connects';
import connectPic from '../../assets/images/Profile/connectPic.png';
import locationPic from '../../assets/images/Profile/location.png';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import star from '../../assets/images/Profile/star.png'
import edit from '../../assets/images/Profile/edit.png'
import { Link } from 'react-router-dom';
import MyPosts from './userProfileComponents/myPosts'
import MyVideos from './userProfileComponents/myVideos'
import UserRecommendations from './userProfileComponents/myRecommendations'
import OtherRatings from './userProfileComponents/otherRatings';
import { othersRatings } from '../wm_actions/profile'



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

class Profile extends React.Component {
    state = {
        selected: null,
        value: 0,
        id: ''
    }
    static propTypes = {
        me: PropTypes.array,
        numberOfConnects: PropTypes.string,
        personalPosts: PropTypes.array,
        personalVideos: PropTypes.array
    }
    componentDidMount() {
        this.props.numberOfConnections();
        this.props.getPersonalPosts();
        this.props.getPersonalVideos();
    }
    handleChange = (index) => {
        this.setState({ value: index })
    }
    ratingsFetch = (index) => {
        this.setState({ value: index })
    }
    render() {
        return (
            <div id='profileContainer'>
                {this.props.me.map(user => (
                    <div>
                        <div className='profileTop'>
                            <img alt='' src={BGProfile} className='bgProfile' />
                            <Avatar src={user.profile.avatar} className='userPic' sizes='large' />
                        </div>
                        <div>
                            <div id='profileInfo'>
                                <div id='profileRating'>
                                    <img alt='' src={star} />
                                    <p>
                                        {user.profile.overall_rating}
                                    </p>
                                </div>
                                <h1>{user.name}</h1>
                                <Link to='/editProfile' id='profileEdit'>
                                    <img alt='' src={edit} />
                                </Link>
                                <div id='profileProfessionSection'>
                                    {professionConstants.map(proC => (
                                        proC.id === user.profile.profession[0]
                                            ? (<p>{proC.name}, </p>)
                                            : null
                                    ))}
                                    {professionConstants.map(proC => (
                                        proC.id === user.profile.profession[1]
                                            ? (<p> {"  " + proC.name}</p>)
                                            : null
                                    ))}
                                </div>
                                <div class='locationAndConnects'>
                                    <div id='profileLocation'>
                                        <img src={locationPic} id='locationPic' />
                                        {countryConstants.map(counC => (
                                            counC.id === user.country
                                                ? (<p>{counC.name}</p>)
                                                : null
                                        ))}
                                    </div>
                                    <div id='connectsNumber'>
                                        <img src={connectPic} id='connectPic' />
                                        <p>{this.props.numberOfConnects} connections</p>
                                    </div>
                                </div>
                                <div id='profileGenreSection'>
                                    <p id='profileGenreHeading'>Genres:</p>
                                    {genreConstants.map(genC => (
                                        genC.id === user.profile.genre[0]
                                            ? (<p id='profileGenres'>{genC.name}, </p>)
                                            : null
                                    ))}
                                    {genreConstants.map(genC => (
                                        genC.id === user.profile.genre[1]
                                            ? (<p id='profileGenres'>{genC.name}</p>)
                                            : null
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div id='profileAppBar'>
                    <AppBar id='appB' position='relative' color='transparent'>
                        <Tabs
                            value={this.state.value}
                            variant='scrollable'
                            ScrollButtons='auto'
                            textColor='#34529E'
                            indicatorColor='primary'
                        >
                            <Tab id='profileAppBarTab' label='My Posts' onClick={() => this.handleChange(0)} />
                            <Tab id='profileAppBarTab' label='My Videos' onClick={() => this.handleChange(1)} />
                            <Tab id='profileAppBarTab' label='Recommendations' onClick={() => this.handleChange(2)} />
                            <Tab id='profileAppBarTab' label='Rating' onClick={() => this.handleChange(3)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={this.state.value} index={0}><MyPosts /></TabPanel>
                    <TabPanel value={this.state.value} index={1}><MyVideos /></TabPanel>
                    <TabPanel value={this.state.value} index={2}><UserRecommendations /></TabPanel>
                    <TabPanel value={this.state.value} index={3}><OtherRatings /></TabPanel>
                </div>
                <div><p>
                    {this.state.content}
                </p>
                </div>
                <BottomNav />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    me: state.auth.me,
    numberOfConnects: state.connects.numberOfConnects,
    getPersonalPosts: state.posts.personalPosts,
    getPersonalVideos: state.posts.personalVideos
})

export default connect(mapStateToProps, { othersRatings, loadUser, numberOfConnections, getPersonalPosts, getPersonalVideos })(Profile)
