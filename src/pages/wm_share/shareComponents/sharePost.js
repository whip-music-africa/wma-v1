import React from 'react';
import arrowBack from '../../../assets/images/Profile/arrowBack.png';
import './styles/sharePost.css';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postText } from '../../wm_actions/posts';

class SharePost extends React.Component {
    static propTypes = {
        postText: PropTypes.func.isRequired
    }
    state = {
        postContent: ""
    }
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    onSubmit = e => {
        e.preventDefault();
        this.props.postText(this.state.postContent)
    }
    render() {
        const { postContent } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div id='editTopBar'>
                        <img alt='' src={arrowBack} onClick={this.props.history.goBack} />
                        <button id='postShareBtn' type='submit'>Post</button>
                    </div>
                    <div id='sharePostInputSection'>
                        <Avatar />
                        <textarea placeholder="What do you want to share?" id='postInputContentField' required value={postContent} rows={10} onChange={this.onChange} name='postContent' />
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, { postText })(SharePost)