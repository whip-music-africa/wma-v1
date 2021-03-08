import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class OtherRecommendations extends React.Component {
    static propTypes = {
        personRecomendations: PropTypes.array,
        person: PropTypes.array,
    }
    componentDidMount(){
        // this.props.othersRecommendations(this.props.person.id)
    }
    render() {
        if (this.props.personRecomendations.results == []) {
            return <div><h1>Loading</h1></div>
        } else {
            return(
                <div>
                    
                    {this.props.personRecomendations.map(rec => (
                        <p>{rec.recommendation}</p>
                    ))}
                </div>
            )
        }    
    }
}
const mapStateToProps = state => ({
    person: state.profile.person,
    personRecomendations: state.profile.personRecomendations
})
export default connect(mapStateToProps)(OtherRecommendations)