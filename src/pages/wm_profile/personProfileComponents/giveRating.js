import React from 'react';
import './styles/giveRating.css';
import StarRatings from 'react-star-ratings';

class GiveRating extends React.Component {
    
    render() {
        return(
            <div id='ratingContainer'>
                <h1 id='ratingHead'>Rate</h1>
                <p className="ratingHeadings">Talent</p>
                <StarRatings
                    rating={this.props.ratingTalent}
                    starRatedColor="#cca20f"
                    changeRating={this.props.funcTalent}
                    numberOfStars={5}
                    name='rating'
                    starDimension = '25px'
                    starHoverColor='#cca20f'
                    starEmptyColor='#666666'
                />
                <p className="ratingHeadings">Professionalism</p>
                <StarRatings
                    rating={this.props.ratingProfessionalism}
                    starRatedColor="#cca20f"
                    changeRating={this.props.functionProfessionalism}
                    numberOfStars={5}
                    name='rating'
                    starDimension = '25px'
                    starHoverColor='#cca20f'
                    starEmptyColor='#666666'
                />
                <p className="ratingHeadings">Communication</p>
                <StarRatings
                    rating={this.props.ratingCommunication}
                    starRatedColor="#cca20f"
                    changeRating={this.props.functionCommunication}
                    numberOfStars={5}
                    name='rating'
                    starDimension = '25px'
                    starHoverColor='#cca20f'
                    starEmptyColor='#666666'
                />
                <button onClick={this.props.ratingSubmit} id='ratingSubmitButton'>Submit</button>
            </div>
        )
    }
}

export default GiveRating