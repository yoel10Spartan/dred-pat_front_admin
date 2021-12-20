import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hook/useForm'
import { authUser } from '../../stateManagement/actions/auth';

import backgroundImage from '../../assets/3415.jpg';

export const LoginView = () => {

    const [ values, HandleInputChange, reset ] = useForm({
        username: '',
        password: ''
    });

    const dispatch = useDispatch();

    const {username, password} = values;

    const handleInitSession = ( event ) => {
        event.preventDefault();
        if( username !== '' && password !== '' ){
            dispatch( authUser( values ) );
            reset();
        }
    }

    return (
        <div className='container__login'>
            <img 
                className='background_image' 
                src={ backgroundImage } 
                alt='background_image'
            />
            <div className='login__information'>
                <div>
                    <p>Tutor o profesor del proyecto</p>
                    <p>Dr. Lane Frederick Farguer</p>
                </div>
                <p>"Proyecto Arqueologico de Tlaxcallan"</p>
            </div>
            <div className='login__form'>
                <div>
                    <p className='text_init'>Iniciar sesion</p>
                    <form className='form__login'>
                        <input 
                            type='email' 
                            placeholder='Correo' 
                            name='username'
                            autoComplete='off'
                            value={ username }
                            onChange={ HandleInputChange }
                        />
                        <input 
                            type='password' 
                            placeholder='Contraseña' 
                            name='password'
                            autoComplete='off'
                            value={ password }
                            onChange={ HandleInputChange }
                        />
                        <div className='remember_check'>
                            <input type='checkbox' />
                            <p>Recordar</p>
                        </div>
                        <input 
                            type='submit'
                            value='Iniciar sesion'
                            onClick={ handleInitSession }
                            className='btn_init'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}