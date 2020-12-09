import Axios from 'axios';
import React from 'react';
import './connect.css'
import axios from 'axios';


const connectRequests = (id) => (getState) => {

    const key = getState.auth.key;

    //Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // If token, add to headers config
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };

    axios.get('https://api.whipafrica.com/v1/connections/users/connectrequests/' + id + '/')
        .then(res => {
            console.log(res)
        })
}

class ConnectButton extends React.Component {
    render() {
        return (
            <div>
                <button id='music-connect-button' onClick={connectRequests()}>Connect</button>
            </div>
        )
    }
}

export default ConnectButton