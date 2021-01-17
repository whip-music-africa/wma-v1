import React from 'react'
import Navbar from '../wm_navigation/Navbar'
import './feedback.css'


class Feedback extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div id='feedbackHeadContainer'>
                    <h1 id='feedbackHeading'>Feedback</h1>
                    <p id='feedbackPara'>Do you have recommendations for us? We will love to hear from you</p>
                </div>
                <form id='feedbackInputContainer'>
                    <textarea placeholder='Type Here...'></textarea>
                    <input type='submit' id='feedbackSubmitButton' />
                </form>
            </div>
        )
    }
}

export default Feedback