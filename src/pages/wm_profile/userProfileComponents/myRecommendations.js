import React from 'react';
import {userRecommendations} from '../../wm_actions/profile'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class UserRecommendations extends React.Component {
    static propTypes = {
        recommendations: PropTypes.array,
        isFetchingRecommendations: PropTypes.bool
    }
    componentWillMount() {
        this.props.userRecommendations();
    }
    render() {
        // if(this.props.isFetchingRecommendations) {
        //     return <h1>Loading...</h1>
        // } 
            return (
                <div>
                    {this.props.recommendations.map(rec => (
                        <div className="recContainer">
                            <h1 className='rec-text'>{rec.recommendation}</h1>
                            <div>
                                <p className='rec-by'>{rec.recommendation_by.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        
        
    }
}
const mapStateToProps = state => ({
    recommendations: state.profile.recommendations,
    isFetchingRecommendations: state.profile.isFetchingRecommendations
})

export default connect(mapStateToProps, {userRecommendations})(UserRecommendations) 