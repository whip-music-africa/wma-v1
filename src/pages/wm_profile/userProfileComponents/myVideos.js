import React from 'react';
import { getPersonalVideos } from '../../wm_actions/posts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class MyVideos extends React.Component {
    static propTypes = {
        personalVideos: PropTypes.array
    }
    componentWillMount() {
        this.props.getPersonalVideos()
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
    personalVideos: state.posts.personalVideos
})
export default connect(mapStateToProps, { getPersonalVideos })(MyVideos)