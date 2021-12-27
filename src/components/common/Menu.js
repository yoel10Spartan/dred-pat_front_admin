import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAuthInformation } from '../../stateManagement/actions/auth';
import arrow from '../../assets/arrow.svg';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { HeaderPhoto } from './HeaderPhoto';

export const Menu = () => {

    const dispatch = useDispatch();

    const finishSession = () => {
        dispatch( deleteAuthInformation() );
    }

    useEffect(() => {
        const listElements = document.querySelectorAll('.list__button--click');
        listElements.forEach(listElement => {
            listElement.addEventListener('click', ()=>{
                listElement.classList.toggle('arrow');
                let height = 0;
                let menu = listElement.nextElementSibling;
                if(menu.clientHeight == "0"){
                    height=menu.scrollHeight;
                }
                menu.style.height = `${height}px`;
            })
        });
    }, []);

    return (
        <div style={{
            display: 'flex'
        }}>
            <div>
                <nav className="nav">
                    <ul className="list">

                        <li className="list__item">
                            <div className="list__button">
                                <Link to='/home' className="nav__link">Menu</Link>
                            </div>
                        </li>

                        <li className="list__item">
                            <div className="list__button">
                                <Link to='/users' className="nav__link">Usuarios</Link>
                            </div>
                        </li>

                        <li className="list__item">
                            <div className="list__button">
                                <Link to='/unit_records/T12__Unidades__U__X__Y' className="nav__link">T12 UNIDADES "UXY"</Link>
                            </div>
                        </li>

                        <li className="list__item">
                            <div className="list__button">
                                <Link to="/unit_records/T27__Unidad__Z" className="nav__link">T27 UNIDADES "Z"</Link>
                            </div>
                        </li>

                        <li className="list__item list__item--click">
                            <div className="list__button list__button--click">
                                <a href="#" className="nav__link">Artefactos</a>
                                <img src={ arrow } className="list__arrow" />
                            </div>

                            <ul className="list__show">
                                <li className="list__inside">
                                    <Link 
                                        to="/artefacto/litica" 
                                        className="nav__link nav__link--inside"
                                    >
                                        Lítica
                                    </Link>
                                </li>

                                <li className="list__inside">
                                    <Link 
                                        to="/artefacto/ceramica" 
                                        className="nav__link nav__link--inside"
                                    >
                                        Cerámica
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="list__item">
                            <div className="list__button">
                                <Link 
                                    to="/unit_records/profiles__plans__TAP__2018" 
                                    className="nav__link"
                                >
                                    Profiles Plans TAP 2018
                                </Link>
                            </div>
                        </li>

                        <li className="list__item">
                            <div className="list__button">
                                <Link 
                                    to="/unit_records/Fotos__Microscopio_Micromorfologia" 
                                    className="nav__link"
                                >
                                    Analisis de suelos
                                </Link>
                            </div>
                        </li>

                        <li className="list__item" onClick={ finishSession }>
                            <div className="list__button">
                                <a href="#" className="nav__link">Salir</a>
                            </div>
                        </li>

                    </ul>
                </nav>
            </div> 
            <div>
                <HeaderPhoto />
                <Outlet />
            </div>
        </div>
    )
}
