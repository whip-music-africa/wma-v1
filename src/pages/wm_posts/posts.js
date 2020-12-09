import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../wm_actions/posts';
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
import { professionConstants } from '../wm_constants/index'


export class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        likes: PropTypes.array,
        isFetching: PropTypes.bool
    };

    componentDidMount() {
        this.props.getPosts();
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
            <Fragment>
                <div className='post-wrapper'>
                    {this.props.posts.map(post => (
                        <Card className='root' key={post.id}>
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
                            // {post.created_by.profile.profession[0] + " / " + post.created_by.profile.profession[1] + ', ' + post.created_by.country}
                            />
                            <CardContent id='cardContent'>
                                <Typography id='textPostContent'>{post.text_body}</Typography>
                                <img id='ImagePostContent' src={post.image_url} />
                            </CardContent>
                            <div id='reaction-wrapper'>
                                <div id='reactions'>
                                    <img alt='' src={like} />
                                </div>
                                <div id='reactions'>
                                    <img alt='' src={comment} />
                                </div>
                                <div id='reactions'>
                                    <img alt='' src={share} />
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
    isFetching: state.posts.isFetching
})
export default connect(mapStateToProps, { getPosts })(Posts)
