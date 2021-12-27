import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { types } from "../../const/types";
import { fetchGet, fetchToAuth } from "../../utils/fetch";
import { finishLoading, startLoading } from "./loading";

const setAuthInformation = ( information ) => ({
    type: types.authSetInformation,
    payload: information
});

export const deleteAuthInformation = () => {
    Cookies.remove('token');
    return {
        type: types.authDeleteInformation
    }
}

export const checkingFinishAuth = () => ({
    type: types.authCheckingFinish
})

export const getDataUser = ( token ) => {
    return async ( dispatch ) => {
        try {
            const respData = await fetchGet('api/v1.0/users/', token);
            dispatch( setAuthInformation( respData.data ) );    
        } catch (error) {
            dispatch( checkingFinishAuth() );
            dispatch( deleteAuthInformation() );
            // The user ended the session or the token has already expired
        }
    }
}

export const authUser = (data) => {
    return async (dispatch) => {
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('password', data.password);
        dispatch( startLoading('loadAuth') );
        try {
            const resp = await fetchToAuth('api/v1.0/users/login', formData);
            Cookies.set('token', resp.data.access_token);
            dispatch( getDataUser( resp.data.access_token ) );
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo o contraseña incorrectos!',
            });
        }
        dispatch( finishLoading('loadAuth') );
    }
}