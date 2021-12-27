import React from 'react'
import load from '../../assets/load.svg';

export const Load = () => {
    return (
        <div style={{
            width: '100%',
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <img src={load} alt='load' />
            <p>Cargando...</p>
        </div>
    )
}