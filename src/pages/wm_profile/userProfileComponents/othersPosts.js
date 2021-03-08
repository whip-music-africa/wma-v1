import React from 'react';
import { getUserPosts } from '../../wm_actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { professionConstants } from '../../wm_constants/index';
import like from '../../../assets/images/Posts/like.png'
import comment from '../../../assets/images/Posts/comment.png';
import share from '../../../assets/images/Posts/share.png';

class MyPosts extends React.Component {
    static propTypes = {
        userPosts: PropTypes.array,

        person: PropTypes.array
    }
    componentDidMount() {

    }
    render() {
        if (this.props.userPosts == []) {
            return <div><h1>Loading</h1></div>
        } else {
            return (
                <div>
                    {this.props.userPosts.results.sort((a, b) => (b.created_at < a.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0)).map(post => (
                            <Card className='root' key={post.id}>
                                <CardHeader
                                avatar={
                                    <Avatar aria-label='recipe' className='avatar' src={this.props.person.profile.avatar}>
                                    </Avatar>
                                }
                                title={this.props.person.name}
                                subheader={professionConstants.map(proC => (
                                    <div>
                                        <p>
                                            {
                                                proC.id === this.props.person.profile.profession[0]
                                                    ? proC.name
                                                    : null
                                            }
                                        </p>
                                        <p>
                                            {
                                                proC.id === this.props.person.profile.profession[1]
                                                    ? proC.name
                                                    : null
                                            }
                                        </p>
                                    </div>
                                ))}
                            />
                                <CardContent id='cardContent'>
                                    <Typography id='textPostContent'>{post.text_body}</Typography>
                                    <img id='ImagePostContent' src={post.image_url} />
                                </CardContent>
                                <div id='reaction-wrapper'>
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
                            </div>
                            </Card>
                        ))}
                </div>
            )
        }
    }
}
const mapStateToProps = state => ({
    userPosts: state.profile.userPosts,
    person: state.profile.person
})
export default connect(mapStateToProps, { getUserPosts })(MyPosts)