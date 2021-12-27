import React from 'react'

export const NotFound = () => {
    return (
        <div style={ containerNotFound }>
            <img 
                src={'https://www.omarortega.com.mx/assets/images/error/404.png'}
                style={ styleImage }
            />
        </div>
    )
}

const containerNotFound = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh'
}

const styleImage = {
    width: '590px',
    height: '390px'
}