import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../../styles/genericStyles';
import { deleteUnitData } from '../../stateManagement/actions/unit';

export const MainView = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( deleteUnitData() );
    }, [])

    return (
        <>
            <p className='title__unit'>Consulta general de unidades</p>
            <div className='container__data'>
                <div className='data__units'>
                    <Button 
                        as={Link} 
                        to='/unit/d98sa' 
                        style={buttonStyles}
                    >
                        Unidades T12 UXY
                    </Button>
                    <Button 
                        as={Link} 
                        to='/unit/vfdv8' 
                        style={buttonStyles}
                    >
                        Unidades T27 Z
                    </Button>
                </div>
                <div className='data__image'>
                    <img src='https://image.freepik.com/vector-gratis/excavaciones-arqueologicas-paisajes-naturales_107791-384.jpg' />
                </div>
            </div>
        </>
    )
}

const buttonStyles = {
    width: '150px',
    margin: '10px',
    textDecoration: 'none',
    textAlign: 'center'
}