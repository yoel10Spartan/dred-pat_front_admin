import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hook/useForm'
import { authUser } from '../../stateManagement/actions/auth';
import backgroundImage from '../../assets/3415.jpg';

export const LoginView = () => {

    const dispatch = useDispatch();
    const { load } = useSelector(state => state.loading);
    const [ values, HandleInputChange, reset ] = useForm({
        username: '',
        password: ''
    });
    
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
                    <p>Tutor del proyecto</p>
                    <p>Dr. Lane F. Fargher</p>
                </div>
                <p>"Proyecto Arqueológico de Tlaxcallan"</p>
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
                        <input 
                            type='submit'
                            value={ load.loadAuth ? 'Cargando...' : 'Iniciar sesion'}
                            onClick={ handleInitSession }
                            className='btn_init'
                            disabled={ load.loadAuth }
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}