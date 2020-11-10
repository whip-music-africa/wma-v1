import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../wm_actions/posts';

export class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                <p>{this.props.posts.results}</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts: state.posts.posts
})
export default connect(mapStateToProps, { getPosts })(Posts)
