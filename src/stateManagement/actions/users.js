import Swal from "sweetalert2";
import { types } from "../../const/types";
import { fetchGet, fetchToDelete, fetchToPost } from "../../utils/fetch";
import { finishLoading, startLoading } from "./loading";

const setAllUsers = ( payload ) => ({
    type: types.usersGetAll,
    payload: payload
});

const deleteOneUser = ( id_user ) => ({
    type: types.usersDeleteID,
    payload: id_user
});

const insertNewUser = ( info_user ) => ({
    type: types.userAdd,
    payload: info_user
});

export const getDataUser = ( token ) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadGetUsers') );
        try {
            const respData = await fetchGet('api/v1.0/users/get_all_users', token);
            dispatch( setAllUsers( respData.data ) );  
        } catch (error) {
            console.log('Hubo un error');
        }
        dispatch( finishLoading('loadGetUsers') );
    }
}

export const addNewUser = (data, token) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadAddUser') );
        
        const respData = await fetchToPost('api/v1.0/users/add_user', data, token );
        if(respData.data.code === 400){   
            dispatch( finishLoading('loadAddUser') );
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ya hay un usuario registrado con este correo!',
                showCloseButton: true
            });
        } 

        dispatch( insertNewUser( respData.data ) );
        
        dispatch( finishLoading('loadAddUser') );
    }
}

export const deleteUser = ( id_user, token ) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadDeleteUser') );
        try {
            const respData = await fetchToDelete( 
                `api/v1.0/users/delete_user/${id_user}`, 
                token
            );
            if(respData.status === 200){
                dispatch( deleteOneUser( id_user ) );
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo eliminar, intentelo más tarde!',
            });
        }
        dispatch( finishLoading('loadDeleteUser') );
    }
}