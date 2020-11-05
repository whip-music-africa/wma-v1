import React from 'react';
import './App.css';
import Landing from './pages/wm_landing/index';
import RoutingWM from './pages/wm_routes/routes'
import Alerts from './pages/wm_services/alertService';
import { loadUser } from './pages/wm_actions/auth';
import store from './pages/wm_store/store'
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <div className="App">
                        <header className="App-header">
                            <RoutingWM />
                        </header>
                    </div>
                </AlertProvider>
            </Provider>
        );
    }
}

export default App;
