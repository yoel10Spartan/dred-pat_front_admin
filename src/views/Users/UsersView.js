import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Load } from '../../components/common/Load';
import { UserModal } from '../../components/common/Modal/UserModal';
import { useLoad } from '../../hook/useLoad';
import { deleteUser, getDataUser } from '../../stateManagement/actions/users';

export const UsersView = () => {
    
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);
    const { id } = useSelector(state => state.auth.info_user);
    const { load } = useSelector(state => state.loading);
    const [modal, setModal] = useState(false);
    const token = Cookies.get('token');

    useLoad(load.loadDeleteUser, {
        title: 'Eliminando usuario',
        description: 'Espere un momento, por favor.'
    });

    useEffect(() => {
        dispatch( getDataUser( token ) );
    }, []);

    const handleDeleteUser = (id_user) => {
        dispatch( deleteUser( id_user, token ) );
    }

    const handleModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <div style={{
            width: 'calc(100vw - 300px)',
            height: 'calc(100vh - 60px)',
            overflowY: 'scroll',
            paddingLeft: '30px'
        }}>
            <UserModal 
                isOpen={ modal }
                closeModal={ closeModal }
            />
            <h1>Usuarios</h1>

            <Button 
                variant="outline-danger"
                onClick={handleModal}
            >
                Agregar usuario
            </Button>

            {load.loadAddUser && <p style={{
                marginTop: '10px'
            }}>Cargando usuario nuevo...</p>}

            {load.loadGetUsers ? <Load /> : <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {
                    users.map(user => {
                        if( user.id !== id ){
                            return (
                                <Card key={ user.id } style={{ width: '18rem', margin: '10px'}}>
                                    <Card.Img 
                                        variant="top" 
                                        src={ user.url_photo_user } 
                                        style={{
                                            width: '100%',
                                            height: '100px',
                                            objectFit: 'contain'
                                        }}    
                                    />
                                    <Card.Body>
                                        <Card.Title>{ user.name_user }</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>ID - { user.id }</ListGroupItem>
                                        <ListGroupItem>Correo - { user.email_user }</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly'
                                    }}>
                                        <Button 
                                            variant="outline-danger"
                                            onClick={ () => handleDeleteUser(user.id) }
                                        >
                                            Eliminar
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    })
                }
            </div>}
        </div>
    )
}
