import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hook/useForm';
import { customStyles } from '../../../styles/customStyles';
import { addNewUser } from '../../../stateManagement/actions/users';
import { useLoad } from '../../../hook/useLoad';
import { uploadImage } from '../../../stateManagement/actions/file';
import { StringValidations } from '../../../utils/stringValidations';
import { initFormAddUser, validateForm } from '../../../const/initForm';
import { setValidations } from '../../../utils/helpers';

Modal.setAppElement('#root');

export const UserModal = ({ isOpen, closeModal }) => {

    const token = Cookies.get('token');
    const dispatch = useDispatch();
    const { load } = useSelector(state => state.loading);
    const { pathFile } = useSelector(state => state.file);
    const [handleErrors, setHandleErrors] = useState(validateForm);
    const [ values, HandleInputChange, reset] = useForm(initFormAddUser);

    const { name_user, email_user, password_user } = values;

    const handleAddUser = (event) => {
        event.preventDefault();
        values['url_photo_user'] = pathFile;
        
        const [ modifiedObject, allValid ] = setValidations(values);
        setHandleErrors( modifiedObject )

        if(pathFile !== '' && allValid){
            dispatch( addNewUser( values, token ) );
            closeModal();
            reset();
        }

    }

    const handleImage = ( event ) => {
        const file = event.target.files[0];
        dispatch( uploadImage( file ) );
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Agregar fotografia</Form.Label>
                        <Form.Control 
                            disabled={ load.loadUploadFile } 
                            onChange={ handleImage } 
                            type="file" 
                            accept="image/png, image/jpeg, image/webp"
                        />
                        { load.loadUploadFile ? <Form.Text className="text-muted">
                            Subiendo imagen...
                        </Form.Text> : '' }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nombre completo"
                            name='name_user'
                            value={ name_user }
                            onChange={ HandleInputChange }
                        />
                        {!handleErrors.name_user_error && <Form.Text className="text-muted">
                            El nombre solo puede contener letras y espacios.
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control 
                            type="email" 
                            autoComplete='off' 
                            placeholder="Correo electronico"
                            name='email_user'
                            value={ email_user }
                            onChange={ HandleInputChange }
                        />
                        {!handleErrors.email_user_error && <Form.Text style={{color: '#B03A2E'}} className="text-muted">
                            Correo electronico invalido
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Contraseña"
                            name='password_user'
                            value={ password_user }
                            onChange={ HandleInputChange }
                        />
                        {!handleErrors.password_user_error && <Form.Text className="text-muted">
                            Contraseña invalida, 6 - 10 caracteres, 1 letra mayuscula, 1 letra minuscula, 1 digito numerico, 1 caracter especial.
                        </Form.Text>}
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={ handleAddUser }
                    >
                        Agregar
                    </Button>
                </Form>
            </Modal>
        </div>
    )
}

// Password
// 6 to 10 characters
// 1 lowercase letter
// 1 uppercase letter
// 1 numeric digit
// 1 special character