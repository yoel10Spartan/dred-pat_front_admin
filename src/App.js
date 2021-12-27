import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './stateManagement/store';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}