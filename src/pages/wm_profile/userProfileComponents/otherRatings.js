import React from 'react';
import {othersRatings} from '../../wm_actions/profile';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

class OtherRatings extends React.Component {
    state = {
        showRating: false
    }
    static propTypes = {
        personRatings: PropTypes.array,
        me: PropTypes.array
    }
    componentWillMount() {
        this.props.othersRatings(this.props.me[0].id)
    }
    showIt = e => {
        e.preventDefault();
        this.setState({showRating: !this.state.showRating})
    }
    render() {
        // if (this.props.personRatings == []) {
        //     return <div><h1>Loading</h1></div>
        // }
            return(
                <div>
                    {this.props.personRatings.map(rec => (
                        <div className='rateContainer'>
                            <button className='rateButton' onClick={this.showIt}>
                                <StarRatings
                                    rating={rec.talent_rating}
                                    starRatedColor="#cca20f"
                                    changeRating={this.props.funcTalent}
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension = '25px'
                                    starHoverColor='#cca20f'
                                    starEmptyColor='#666666'
                                /> 
                            </button>
                            {this.state.showRating ? <div className='hiddenRateContainer'>
                            <p className="ratingHeadings">Talent</p>
                            <StarRatings
                                rating={rec.talent_rating}
                                starRatedColor="#cca20f"
                                changeRating={this.props.funcTalent}
                                numberOfStars={5}
                                name='rating'
                                starDimension = '20px'
                                starHoverColor='#cca20f'
                                starEmptyColor='#666666'
                            />
                            <p className="ratingHeadings">Professionalism</p>
                            <StarRatings
                                rating={rec.professionalism_rating}
                                starRatedColor="#cca20f"
                                changeRating={this.props.functionProfessionalism}
                                numberOfStars={5}
                                name='rating'
                                starDimension = '20px'
                                starHoverColor='#cca20f'
                                starEmptyColor='#666666'
                            />
                            <p className="ratingHeadings">Communication</p>
                            <StarRatings
                                rating={rec.communication_rating}
                                starRatedColor="#cca20f"
                                changeRating={this.props.functionCommunication}
                                numberOfStars={5}
                                name='rating'
                                starDimension = '20px'
                                starHoverColor='#cca20f'
                                starEmptyColor='#666666'
                            />
                            </div> : null}
                        </div>
                    ))}
                </div>
            )    
    }
}
const mapStateToProps = state => ({
    personRatings: state.profile.personRatings,
    me: state.auth.me
})

export default connect(mapStateToProps, {othersRatings})(OtherRatings)