import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Load } from '../components/common/Load';
import { Menu } from '../components/common/Menu';
import { getDataUser } from '../stateManagement/actions/auth';
import { ArtefactoView } from '../views/Artefactos/ArtefactoView';
import { LoginView } from '../views/Auth/LoginView';
import { DefaultView } from '../views/Home/DefaultView';
import { HomeView } from '../views/Home/HomeView';
import { RecordsView } from '../views/Records/RecordsView';
import { UnitView } from '../views/Units/UnitView';
import { UsersView } from '../views/Users/UsersView';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking } = useSelector(state => state.auth);
    
    useEffect(() => {
        const token = Cookies.get('token');
        dispatch( getDataUser( token ) );
    }, []);

    if( checking ){return <Load />}

    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route 
                            exact 
                            path='/' 
                            element={
                                <PublicRouter>
                                    <LoginView />
                                </PublicRouter>
                            } 
                        />
                        <Route
                            exact
                            path='/' 
                            element={ <Menu /> }     
                        >
                            <Route
                                exact
                                path='home' 
                                element={
                                    <PrivateRouter>
                                        <HomeView />
                                    </PrivateRouter>
                                }
                            />
                            <Route
                                exact
                                path='roles' 
                                element={
                                    <PrivateRouter>
                                        <DefaultView />
                                    </PrivateRouter>
                                }
                            />
                            <Route
                                exact
                                path='users' 
                                element={
                                    <PrivateRouter>
                                        <UsersView />
                                    </PrivateRouter>
                                }
                            />
                            <Route
                                exact
                                path='unit_records/:item' 
                                element={
                                    <PrivateRouter>
                                        <RecordsView />
                                    </PrivateRouter>
                                }
                            />
                            <Route
                                exact
                                path='artefacto/:item' 
                                element={
                                    <PrivateRouter>
                                        <ArtefactoView />
                                    </PrivateRouter>
                                }
                            />
                            <Route
                                exact
                                path='unit/:item' 
                                element={
                                    <PrivateRouter>
                                        <UnitView />
                                    </PrivateRouter>
                                }
                            />
                        </Route>
                        <Route path='*' element={ <LoginView /> } />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}