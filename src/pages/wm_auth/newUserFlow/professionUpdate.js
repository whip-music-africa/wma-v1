import React, { Component } from 'react'
import completeProfile from '../../../assets/images/Register/completeProfile-top.png'
import '../styles/professionUpdate.css'
import { professionConstants } from '../../wm_constants/index.js';

export class professionUpdate extends Component {
    state = {
        profession: [],
        genre: []
    }
    render() {
        return (
            <div className='profession-wrapper'>
                <img src={completeProfile} id='completeProfile-img' />
                <h2>Two more steps and you’re done</h2>
                <h4>What is your profession in the music industry</h4>
                <p id='limitlabel'>(Pick at <span>MOST</span> 2 professions)</p>
                <ul className='container' id='checkboxes-wrapper'>
                    {professionConstants.map(profession => (
                        <li className='checkbox-wrapper'>
                            <input type='checkbox' id={profession.id} value={profession.id} name={profession.id} />
                            <label for={profession.id}>{profession.name}</label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default professionUpdate
