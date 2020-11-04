import React from 'react';
import './App.css';
import Login from "./pages/wm_auth/Login";
import SignUp from "./pages/wm_auth/SignUp";
import Landing from './pages/wm_landing/index';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <h4 className="font-extrabold">Whip Music Africa</h4>

                <h5 className="font-extrabold">Login</h5>
                <Login/>

                <h5 className="font-extrabold">Sign up</h5>
                <SignUp/> */}
                <Landing />

            </header>
        </div>
    );
}

export default App;
