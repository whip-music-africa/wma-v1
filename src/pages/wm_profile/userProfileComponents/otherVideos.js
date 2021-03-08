import React from 'react';
import { getUserVideos } from '../../wm_actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import VideoPlayer from 'react-simple-video-player';


class OthersPosts extends React.Component {
    static propTypes = {
        userVideos: PropTypes.array,
        person: PropTypes.array
    }
    componentDidMount() {
        // this.props.getUserVideos();
    }
    render() {
        if (this.props.userVideos == []) {
            return <div><h1>Loading</h1></div>
        } else {
            return (
                <div>
                    {this.props.userVideos.results.sort((a, b) => (b.created_at < a.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0)).map(post => (
                            <Card className='root' key={post.id}>
                                <CardContent id='cardContent'>
                                    <Typography id='textPostContent'>{post.text_body}</Typography>
                                    <img id='ImagePostContent' src={post.image_url} />
                                {post.hasOwnProperty("video_url") ? <VideoPlayer id='VideoPostContent' url={post.video_url} autosize /> : null}
                                </CardContent>
                            </Card>
                        ))}
                </div>
            )
        }
    }
}
const mapStateToProps = state => ({
    userVideos: state.profile.userVideos,
    person: state.profile.person
})
export default connect(mapStateToProps, { getUserVideos })(OthersPosts)