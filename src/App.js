import React from 'react';
import './App.css';
import Landing from './pages/wm_landing/index';
import RoutingWM from './pages/wm_routes/routes'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <RoutingWM />
            </header>
        </div>
    );
}

export default App;
