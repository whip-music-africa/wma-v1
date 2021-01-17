// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Back from '../../../assets/images/Profile/arrowBack.png'
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import Webcam from "react-webcam";
// import "./App.css";
import './styles/sharePhoto.css'
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";

class SharePhoto extends React.Component {

    state = {
        image: null,
        supportsCamera: 'mediaDevices' in navigator
    }

    changeImage = (e) => {
        this.setState({
            image: URL.createObjectURL(e.target.files[0])
        })
    }

    startChangeImage = () => {
        this.setState({ enableCamera: !this.state.enableCamera })
    }

    takeImage = () => {
        this._canvas.width = this._video.videoWidth
        this._canvas.height = this._video.videoHeight

        this._canvas.getContext('2d').drawImage(
            this._video,
            0, 0,
            this._video.videoWidth,
            this._video.videoHeight
        )

        this._video.srcObject.getVideoTracks().forEach(track => {
            track.stop()
        })

        this.setState({
            image: this._canvas.toDataURL(),
            enableCamera: false
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">
                        <Link to="/">
                            <img src={Back} alt="logo" style={{ height: 30 }} />
                        </Link>
                Profile
              </span>
                </nav>

                <div style={{ textAlign: 'center' }}>
                    <img
                        src={this.state.image || Back} alt="profile"
                        style={{ height: 200, marginTop: 50 }}
                    />
                    <p style={{ color: '#888', fontSize: 20 }}>username</p>

                    {
                        this.state.enableCamera &&
                        <div>
                            <video
                                ref={c => {
                                    this._video = c
                                    if (this._video) {
                                        navigator.mediaDevices.getUserMedia({ video: true })
                                            .then(stream => this._video.srcObject = stream)
                                    }
                                }}
                                controls={false} autoPlay
                                style={{ width: '100%', maxWidth: 300 }}
                            ></video>

                            <br />

                            <button
                                onClick={this.takeImage}
                            >Take Image</button>

                            <canvas
                                ref={c => this._canvas = c}
                                style={{ display: 'none' }}
                            />

                        </div>
                    }

                    <br />
                    {
                        this.state.supportsCamera &&
                        <button
                            onClick={this.startChangeImage}
                        >
                            Toggle Camera
              </button>
                    }
                </div>

            </div>
        )
    }

}

export default SharePhoto