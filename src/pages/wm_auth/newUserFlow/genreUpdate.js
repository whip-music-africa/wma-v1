import React, { Component } from 'react'
import completeProfile from '../../../assets/images/Register/completeProfile-top.png'
import '../styles/professionUpdate.css'
import { genreConstants } from '../../wm_constants/index.js';

export class genreUpdate extends Component {
    render() {
        return (
            <div className='profession-wrapper'>
                <img src={completeProfile} id='completeProfile-img' />
                <h2>Two more steps and you’re done</h2>
                <h4>What is your profession in the music industry</h4>
                <p id='limit-label'>(Maximum of three genres can be selected)</p>
                <ul className='container' id='checkboxes-wrapper'>
                    {genreConstants.map(genre => (
                        <li className='checkbox-wrapper'>
                            <input type='checkbox' id={genre.id} value={genre.id} name={genre.id} />
                            <label for={genre.id}>{genre.name}</label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default genreUpdate
