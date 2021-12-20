import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { LoginView } from '../views/Auth/LoginView';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={ <LoginView /> } />
                </Routes>
            </div>
        </Router>
    )
}
