import React from 'react';
import { getPersonalPosts } from '../../wm_actions/posts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

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
                <h1>These are My Posts Components</h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    personalPosts: state.posts.personalPosts
})
export default connect(mapStateToProps, { getPersonalPosts })(MyPosts)