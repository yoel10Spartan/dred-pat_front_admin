import React from 'react';

export const HomeView = () => {

    return (
        <div style={containerStyle}>
            <p style={titleStyle}>
                {'"Proyecto Arqueológico de Tlaxcallan"'}
            </p>
        </div>
    )
}

const titleStyle = {
    fontFamily: 'Rubik, sans-serif',
    fontSize: '40px',
    userSelect: 'none',
    letterSpacing: '2.5px',
    wordSpacing: '4px',
    zIndex: '1000000',
    color: '#000',
    fontWeight: '800',
    textAlign: 'center'
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh'
}