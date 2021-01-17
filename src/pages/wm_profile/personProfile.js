import React from 'react';
import PropTypes from 'prop-types';
import BottomNav from '../wm_navigation/BottomNav';
import { getProfileInfo } from '../wm_actions/profile';
import BGProfile from '../../assets/images/Profile/bg-profile.png';
import profile from './profile.css';
import Avatar from '@material-ui/core/Avatar';
import UserProfile from '../../assets/images/Profile/EllipseP.png'
import { connect } from 'react-redux';
import { numberOfConnections } from '../wm_actions/connects';
import { genreConstants, countryConstants, professionConstants } from '../wm_constants/index';
import connectPic from '../../assets/images/Profile/connectPic.png';
import locationPic from '../../assets/images/Profile/location.png';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import star from '../../assets/images/Profile/star.png'


class PersonProfile extends React.Component {
    state = {
        personId: ""
    }
    static propTypes = {
        person: PropTypes.array,
        numberOfConnects: PropTypes.string
    }
    componentDidMount() {
        this.props.getProfileInfo(this.props.match.params.id);
        this.props.numberOfConnections();
    }
    render() {
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
                                <p id='profileGenreHeading'>Genres:</p>
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
                    </div>
                    <div id='profileAppBar'>
                        <AppBar id='appB' position='relative' color='transparent'>
                            <Tabs
                                variant='scrollable'
                                ScrollButtons='auto'
                                textColor='#34529E'
                                indicatorColor='#34529E'
                            >
                                <Tab id='profileAppBarTab' label='My Posts' onClick={() => this.changeData(this.myPosts())} />
                                <Tab id='profileAppBarTab' label='My Videos' onClick={() => this.changeData(this.myVideos())} />
                                <Tab id='profileAppBarTab' label='Recommendations' onClick={() => this.changeData(this.myRecommendations())} />
                                <Tab id='profileAppBarTab' label='Rating' onClick={() => this.changeData(this.myRatings())} />
                            </Tabs>
                        </AppBar>
                    </div>
                    <div><p>
                        {this.state.content}
                    </p>
                    </div>
                    <BottomNav /></div> : <p>Loading...</p>}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    person: state.profile.person,
    numberOfConnects: state.connects.numberOfConnects,
})
export default connect(mapStateToProps, { getProfileInfo, numberOfConnections })(PersonProfile)

// const PersonProfile = ({ match }) => {
//     const {
//         params: { personId },
//     } = match;
//     const [isLoading, setIsLoading] = useState(true);
//     const [data, setData] = useState();

//     useEffect(() =>{
//         axios.get(`https://api.whipafrica.com/v1/users/${personId}`, )
//     })
// }