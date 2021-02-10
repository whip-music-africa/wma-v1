import React from 'react';
import { getPersonalPosts } from '../../wm_actions/posts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { professionConstants } from '../../wm_constants/index';

class MyPosts extends React.Component {
    static propTypes = {
        personalPosts: PropTypes.array
    }
    componentWillMount() {
        this.props.getPersonalPosts()
    }
    render() {
        return (
            <div>
                {this.props.personalPosts.sort((a, b) => (b.created_at < a.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0)).map(post => (
                        <Card className='root' key={post.id}>
                            <Link to={`/profile/${post.created_by.id}/`}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label='recipe' className='avatar' src={post.created_by.profile.avatar}>
                                    </Avatar>
                                }
                                title={post.created_by.name}
                                subheader={professionConstants.map(proC => (
                                    <div>
                                        <p>
                                            {
                                                proC.id === post.created_by.profile.profession[0]
                                                    ? proC.name
                                                    : null
                                            }
                                        </p>
                                        <p>
                                            {
                                                proC.id === post.created_by.profile.profession[1]
                                                    ? proC.name
                                                    : null
                                            }
                                        </p>
                                    </div>
                                ))}
                            /></Link>
                            <CardContent id='cardContent'>
                                <Typography id='textPostContent'>{post.text_body}</Typography>
                                <img id='ImagePostContent' src={post.image_url} />
                                {/* {post.hasOwnProperty("video_url") ? <VideoPlayer id='VideoPostContent' url={post.video_url} autosize /> : null} */}
                            </CardContent>
                            {/* <div id='reaction-wrapper'>
                                <form onSubmit={this.onSubmit}>
                                    <div id='reactions'>
                                        {post.hasOwnProperty('video_url') ? <button name='postId' value={post.id} onClick={this.onChange} type='submit'><img alt='' src={like} /></button> : post.hasOwnProperty('image_url') ? <button name='postId' value={post.id} onClick={this.onChange} type='submit'><img alt='' src={like} /></button> : post.hasOwnProperty('text_body') ? <button name='postId' value={post.id} onClick={this.onChange} type='submit'><img alt='' src={like} /></button> : null}
                                    </div>
                                </form>
                                <div id='reactions'>
                                    <button><img alt='' src={comment} /></button>
                                </div>
                                <div id='reactions'>
                                    <button><img alt='' src={share} /></button>
                                </div>
                            </div> */}
                        </Card>
                    ))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    personalPosts: state.posts.personalPosts
})
export default connect(mapStateToProps, { getPersonalPosts })(MyPosts)