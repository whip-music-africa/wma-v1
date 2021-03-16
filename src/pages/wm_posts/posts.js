import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts, postTextLike, postImageLike, postVideoLike } from '../wm_actions/posts';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './styles/posts.css';
import like from '../../assets/images/Posts/like.png'
import comment from '../../assets/images/Posts/comment.png';
import share from '../../assets/images/Posts/share.png';
import MyLoader from '../../loader/loader';
import { professionConstants } from '../wm_constants/index';
import VideoPlayer from 'react-simple-video-player';
import { Link } from 'react-router-dom';


export class Posts extends Component {
    state = {
        postType: '',
        postId: ''
    }
    static propTypes = {
        posts: PropTypes.array.isRequired,
        likes: PropTypes.array,
        isFetching: PropTypes.bool,
        me: PropTypes.array
    };
    componentDidMount() {
        this.props.getPosts();
    }
    onSubmit = (e, pid) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.postTextLike(pid);
    }
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
                </div>
            </div>
        }
        return (
            <Fragment>
                <div className='post-wrapper'>
                    {this.props.posts.sort((a, b) => (b.created_at < a.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0)).map(post => (
                        <Card className='root' key={post.id}>
                            {this.props.me[0].id == post.created_by.id ? <Link to={`/profile`}>
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
                            : <Link to={`/profile/${post.created_by.id}/`}>
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
                            /></Link> }
                            <CardContent id='cardContent'>
                                <Typography id='textPostContent'>{post.text_body}</Typography>
                                <img id='ImagePostContent' src={post.image_url} />
                                {post.hasOwnProperty("video_url") ? <VideoPlayer id='VideoPostContent' url={post.video_url} autosize /> : null}
                            </CardContent>
                            <div id='reaction-wrapper'>
                                <form onSubmit={this.onSubmit}>
                                    <div id='reactions'>
                                        {post.hasOwnProperty('video_url') ? <button name='postId' value={post.id} onClick={this.onChange} id='post-like-btn' type='submit'><img alt='' src={like} /></button> : post.hasOwnProperty('image_url') ? <button name='postId' value={post.id} onClick={this.onChange} type='submit' id='post-like-btn'><img alt='' src={like} /></button> : post.hasOwnProperty('text_body') ? <button name='postId' value={post.id} onClick={this.onChange} type='submit' id='post-like-btn'><img alt='' src={like} /></button> : null}
                                    </div>
                                </form>
                                <div id='reactions'>
                                    <button><img alt='' src={comment} /></button>
                                </div>
                                <div id='reactions'>
                                    <button id='post-share-btn'><img alt='' src={share} /></button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    posts: state.posts.posts,
    isFetching: state.posts.isFetching,
    me: state.auth.me
})
export default connect(mapStateToProps, { getPosts, postTextLike, postImageLike, postVideoLike })(Posts)
