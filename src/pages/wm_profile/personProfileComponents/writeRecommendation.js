import React from 'react';
import './styles/writeRecommendation.css';
class WriteRecommendation extends React.Component {
    render() {
        return (
            <div>
                    <h1 id='personRecoHeading'>Recommendation</h1>
                    <textarea onChange={this.props.funcRecommendation} name='recommendation' value={this.props.recommendation} type="text" id='recommendationInput' placeholder="Write your recommendation for Afia......." rows="10" />
                    {/* <input type="submit" id="recommendationSubmit" value="Submit" /> */}
                    <div id='recommendationSubmitContainer'>
                    <button onClick={this.props.recommendationSubmit} id='recommendationSubmit'>Submit</button>
                    </div>
            </div>
        )
    }
}

export default WriteRecommendation;