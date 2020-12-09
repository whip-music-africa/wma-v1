import React from 'react';
import './App.css';
import RoutingWM from './pages/wm_routes/routes'
import Alerts from './pages/wm_services/alertService';
import { loadUser } from './pages/wm_actions/auth';
import store from './pages/wm_store/store'
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './pages/mixpanel';

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
    type: 'success',
    containerStyle: { fontSize: 10, zIndex: 3 }
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
                            <Alerts />
                            <RoutingWM />
                        </header>
                    </div>
                </AlertProvider>
            </Provider>
        );
    }
}

export default App;
