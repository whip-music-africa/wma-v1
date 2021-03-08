import React from 'react';
import PropTypes from 'prop-types';
import BottomNav from '../wm_navigation/BottomNav';
import { getProfileInfo } from '../wm_actions/profile';
import { getUserPosts,getUserVideos } from '../wm_actions/profile';
import BGProfile from '../../assets/images/Profile/bg-profile.png';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { numberOfConnections, deleteConnection } from '../wm_actions/connects';
import { genreConstants, countryConstants, professionConstants } from '../wm_constants/index';
import connectPic from '../../assets/images/Profile/connectPic.png';
import locationPic from '../../assets/images/Profile/location.png';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import star from '../../assets/images/Profile/star.png'
import {othersRecommendations, othersRatings, giveRatings, giveRecommendations} from '../wm_actions/profile'
import OthersPosts from './userProfileComponents/othersPosts'
import MyLoader from '../../loader/loader';
import './personProfile.css';
import WriteRecommendation from './personProfileComponents/writeRecommendation';
import GiveRating from './personProfileComponents/giveRating';
import DropDown from './dropdown'

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


class PersonProfile extends React.Component {
    state = {
        personId: "",
        showMenu: false,
        renderArea: "OtherPosts",
        professionalism: 0,
        communication: 0,
        talent: 0,
        recommendation: ''
    }
    static propTypes = {
        person: PropTypes.array,
        numberOfConnects: PropTypes.string,
        isFetchingPersonProfile: PropTypes.bool,
        isFetchingUserPosts: PropTypes.bool
    }
    async componentDidMount() {
        await this.props.getProfileInfo(this.props.match.params.id);
        await this.props.numberOfConnections();
        await this.props.getUserPosts(this.props.match.params.id);
    }
    handleClickOutside() {
        this.setState({ showMenu:false})
    }
    changeComponent = e =>{
        this.setState({renderArea: e.target.value});
        console.log(this.state.renderArea)
    }
    changeRating = ( talentRating, name ) => {
        this.setState({
          talent: talentRating
        });
      }
    ratingProfessionalism = (newRating) => {
        this.setState({professionalism: newRating});
        console.log(newRating)
    }
    ratingTalent = (newRating) => {
        this.setState({talent: newRating});
        console.log(this.state.talent)
    }
    ratingCommunication = (newRating) => {
        this.setState({communication: newRating});
        console.log(this.state.communication)
    }
    onGiveRating = e => {
        this.props.giveRatings(this.props.match.params.id, this.state.talent, this.state.communication, this.state.professionalism)
    }
    onRecommendation = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.recommendation)
    };
    onRecommendationSubmit = e => {
        if(this.state.recommendation === '') {
            console.log('The Recommendation is Empty');
        } else if(this.state.recommendation === ' ') {
            console.log('The Recommendation just have a space')
        } else {
            return this.props.giveRecommendations(this.props.match.params.id, this.state.recommendation)
        }
    }
    render() {
        if (this.props.isFetchingUserPosts) {
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
                </div>
            </div>
        }
        return (
            <div id='profileContainer'>
                {this.props.person.name ? <div><div className='profileTop'>
                    <img alt='' src={BGProfile} className='bgProfile' />
                    <Avatar src={this.props.person.profile.avatar} className='userPic' sizes='large' />
                </div>
                    <div>
                        <div id='profileInfo'>
                            <div id='profileRating'>
                                <img alt='' src={star} />
                                <p>
                                    {this.props.person.profile.overall_rating}
                                </p>
                            </div>
                            <h1>{this.props.person.name}</h1>
                            <div id='profileProfessionSection'>
                                {professionConstants.map(proC => (
                                    proC.id === this.props.person.profile.profession[0]
                                        ? (<p>{proC.name}, </p>)
                                        : null
                                ))}
                                {professionConstants.map(proC => (
                                    proC.id === this.props.person.profile.profession[1]
                                        ? (<p>{proC.name}</p>)
                                        : null
                                ))}
                            </div>
                            <div class='locationAndConnects'>
                                <div id='profileLocation'>
                                    <img src={locationPic} id='locationPic' />
                                    {countryConstants.map(counC => (
                                        counC.id === this.props.person.country
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
                                <p id='profileGenreHeading'>Interests:</p>
                                {genreConstants.map(genC => (
                                    genC.id === this.props.person.profile.genre[0]
                                        ? (<p id='profileGenres'>{genC.name}, </p>)
                                        : null
                                ))}
                                {genreConstants.map(genC => (
                                    genC.id === this.props.person.profile.genre[1]
                                        ? (<p id='profileGenres'>{genC.name}</p>)
                                        : null
                                ))}
                            </div>
                        </div>
                        <DropDown name={this.changeComponent} otherName={() => {this.props.deleteConnection(this.props.match.params.id)}}/>
                    </div>
                    <div>
                    {
                        this.state.renderArea === 'rate' ? (
                            <GiveRating ratingSubmit={() => {this.onGiveRating()}} funcTalent={this.ratingTalent} ratingTalent={this.state.talent} ratingProfessionalism={this.state.professionalism} ratingCommunication={this.state.communication} functionProfessionalism={this.ratingProfessionalism} functionCommunication={this.ratingCommunication} functionTalent={this.ratingTalent} />
                        ) : this.state.renderArea === 'reco' ? (
                            <WriteRecommendation recommendation={this.state.recommendation} funcRecommendation={this.onRecommendation} recommendationSubmit={() => {this.onRecommendationSubmit()}}/>
                        ) : (
                            <OthersPosts />
                        )
                    }
                    </div>
                    <BottomNav /></div> : <p>Loading...</p>}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    person: state.profile.person,
    numberOfConnects: state.connects.numberOfConnects,
    isFetchingPersonProfile: state.profile.isFetchingPersonProfile,
    isFetchingUserPosts: state.profile.isFetchingUserPosts
})
export default connect(mapStateToProps, { giveRecommendations, getProfileInfo, giveRatings, getUserVideos, numberOfConnections, getUserPosts, othersRecommendations, deleteConnection, othersRatings })(PersonProfile)