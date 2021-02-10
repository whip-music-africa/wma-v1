import React, { Component } from 'react'
import completeProfile from '../../../assets/images/Register/completeProfile-top.png'
import '../styles/professionUpdate.css'
import { professionConstants } from '../../wm_constants/index.js';
import { Link, Redirect } from 'react-router-dom';
import { professionUpdateCall } from '../../wm_actions/auth'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyLoader from '../../../loader/loader';



export class professionUpdate extends Component {
    state = {
        profession: '',
        checked: false,
        show: false
    }
    static propTypes = {
        professionUpdate: PropTypes.bool
    }
    componentWillMount() {
        if (this.props.professionUpdate) {
            return <Redirect to='/completeProfile2' />
        }
    }
    disabledLimit(id) {
        return (
            this.state.profession.length > 1 && this.state.profession.indexOf(id) === -1
        );
    }
    nextBtn() {
        if (this.state.profession.length === 1) {
            this.setState({ show: true })
        } else {
            return null
        }
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.professionUpdateCall(this.state.profession);
    };
    render() {
        // if (this.props.professionUpdate) {
        //     return <Redirect to='/completeProfile2' />
        // }
        if (this.state.profession.length === 0) {
            return <div id='loading-wrapper'>
                <div id='loading-internal'>
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                </div>
            </div>
        }
        return (
            <div className='profession-wrapper'>
                <img src={completeProfile} id='completeProfile-img' />
                <h2>Two more steps and you’re done</h2>
                <h4>What is your profession in the music industry</h4>
                <p id='limitlabel'>(Pick at <span>MOST</span> 2 professions)</p>
                <form onSubmit={this.onSubmit}>
                    <ul className='container' id='checkboxes-wrapper'>
                        {professionConstants.map(profession => (
                            <li key={profession.id} className='checkbox-wrapper'>
                                <input type='checkbox' id={profession.id} value={profession.id} name={profession.id} onChange={e => {
                                    let checked = e.target.checked;
                                    (
                                        professionConstants.map(prof => {
                                            if (profession.id === prof.id) {
                                                prof.checked = checked;
                                                this.nextBtn();
                                            }
                                            return prof.id
                                        })
                                    );
                                    if (e.target.checked === true) {
                                        this.setState(prevState => ({
                                            profession: [...prevState.profession, e.target.value]
                                        }))
                                    } else if (e.target.checked === false) {
                                        this.setState({
                                            profession: this.state.profession.filter(profession => {
                                                return profession !== e.target.value
                                            })
                                        })
                                        return null
                                    };
                                }} checked={profession.checked} disabled={this.disabledLimit(profession.id)} />
                                <div>
                                    <label htmlFor={profession.id}>{profession.name}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {this.state.show &&
                        <input id='cPNextBtn' type='submit' value='NEXT' />
                    }
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    profession: state.auth.profession,
    professionUpdate: state.auth.professionUpdate
})
export default connect(mapStateToProps, { professionUpdateCall })(professionUpdate)
