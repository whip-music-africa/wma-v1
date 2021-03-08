import React, { Component } from 'react'
import completeProfile from '../../../assets/images/Register/completeProfile-top.png'
import '../styles/professionUpdate.css'
import { genreConstants } from '../../wm_constants/index.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';
import { genreUpdateCall } from '../../wm_actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class genreUpdate extends Component {
    state = {
        genre: '',
        checked: false,
        show: false
    }
    static propTypes = {
        genreUpdate: PropTypes.bool
    }
    componentWillMount() {
        // if (this.props.genreUpdate) {
        //     return <Redirect to='/' />
        // }
        console.log('This is the Genre Page')
    }
    disabledLimit(id) {
        return (
            this.state.genre.length > 2 && this.state.genre.indexOf(id) === -1
        );
    }
    nextBtn() {
        if (this.state.genre.length === 2) {
            this.setState({ show: true })
        } else {
            return null
        }
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.genreUpdateCall(this.state.genre);
    };
    render() {
        if (this.props.genreUpdate) {
            return <Redirect to='/' />
        }
        return (
            <div className='profession-wrapper'>
                <Link id='back-Icon' to='/completeprofile'>
                    <ArrowBackIcon />
                </Link>
                <img src={completeProfile} alt='completeProfile' id='completeProfile-img' />
                <h2>Two more steps and you’re done</h2>
                <h4>What is your profession in the music industry</h4>
                <p id='limit-label'>(Maximum of three genres can be selected)</p>
                <form onSubmit={this.onSubmit}>

                    <ul className='container' id='checkboxes-wrapper'>
                        {genreConstants.map(genre => (
                            <li className='checkbox-wrapper'>
                                <input type='checkbox' id={genre.id} value={genre.id} name={genre.id} onChange={e => {
                                    let checked = e.target.checked;
                                    (
                                        genreConstants.map(prof => {
                                            if (genre.id === prof.id) {
                                                prof.checked = checked;
                                                this.nextBtn();
                                            }
                                            return prof.id
                                        })
                                    );
                                    if (e.target.checked === true) {
                                        this.setState(prevState => ({
                                            genre: [...prevState.genre, e.target.value]
                                        }))
                                    } else if (e.target.checked === false) {
                                        this.setState({
                                            genre: this.state.genre.filter(genre => {
                                                return genre !== e.target.value
                                            })
                                        })
                                        return null
                                    }
                                }} checked={genre.checked} disabled={this.disabledLimit(genre.id)} />
                                <div>
                                    <label for={genre.id}><p>{genre.name}</p></label>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {this.state.show &&
                        <input id='cPCompleteBtn' type='submit' value='COMPLETE' />
                    }
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    genre: state.auth.genre,
    genreUpdate: state.auth.genreUpdate
})

export default connect(mapStateToProps, { genreUpdateCall })(genreUpdate)
