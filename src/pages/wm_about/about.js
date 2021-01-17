import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div id='aboutPageContainer'>
                    <div id='aboutPageFirstSection'>
                        <h1>About Whip</h1>
                        <p>Whip is a MusicTech startup that is systemising the African
                        music industry and making powerful connections accessible
                        to all artists. Whip is a MusicTech startup that is systemising the
African music industry and making powerful connections accessible to all artists.Whip is a MusicTech startup that is systemising the African music industry and making powerful connections accessible to all artistes.Whip is a MusicTech startup that is systemising the African music industry and making powerful connections accessible to all artists.</p>
                    </div>
                    <div id='aboutPageSecondSection'>
                        <h1>Privacy policy</h1>
                        <p>Whip is a MusicTech startup that is systemising the African
                        music industry and making powerful connections accessible
                        to all artists. Whip is a MusicTech startup that is systemising the
African music industry and making powerful connections accessible to all artists.Whip is a MusicTech startup that is systemising the African music industry and making powerful connections accessible to all artistes.Whip is a MusicTech startup that is systemising the African music industry and making powerful connections accessible to all artists.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About