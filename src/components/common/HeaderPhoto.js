import React from 'react';
import { useSelector } from 'react-redux';

export const HeaderPhoto = () => {

    const { info_user } = useSelector(state => state.auth);

    return (
        <div className='container__image'>
            <img 
                src={ info_user.url_photo_user } 
                className='photo__user' 
                alt='Photo User' 
            />
        </div>
    )
}
