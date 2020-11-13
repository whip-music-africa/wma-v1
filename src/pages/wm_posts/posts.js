import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../wm_actions/posts';
import Navbar from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './styles/posts.css';
import like from '../../assets/images/Posts/like.png'
import comment from '../../assets/images/Posts/comment.png';
import share from '../../assets/images/Posts/share.png';


export class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        likes: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getPosts();
        // this.props.getLikes();
    }

    render() {

        return (
            <Fragment>
                <Navbar />
                <div className='post-wrapper'>
                    {this.props.posts.map(post => (
                        <Card className='root' key={post.id}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label='recipe' className='avatar' src={post.created_by.profile.avatar}>
                                    </Avatar>
                                }
                                title={post.created_by.name}
                                subheader={post.created_by.profile.profession[0] + " / " + post.created_by.profile.profession[1] + ', ' + post.created_by.country}
                            />
                            <CardContent>
                                <Typography className='textPostContent'>{post.text_body}</Typography>
                            </CardContent>
                            <div id='reaction-wrapper'>
                                <div className='reactions'>
                                    <img alt='' src={like} />
                                    {/* <p>{likes.count + ' Likes'}</p> */}
                                </div>
                                <div className='reactions'>
                                    <img alt='' src={comment} />
                                </div>
                                <div className='reactions'>
                                    <img alt='' src={share} />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <BottomNav />
            </Fragment >
        )
    }
}
const mapStateToProps = state => ({
    posts: state.posts.posts
})
export default connect(mapStateToProps, { getPosts })(Posts)
