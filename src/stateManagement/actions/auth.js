import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { types } from "../../const/types";
import { fetchGet, fetchToAuth, fetchToGet } from "../../utils/fetch";

const setAuthInformation = ( information ) => ({
    type: types.authSetInformation,
    payload: information
});

export const authUser = (data) => {
    return async (dispatch) => {
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('password', data.password);
        try {
            const resp = await fetchToAuth('api/v1.0/users/login', formData);
            const respData = await fetchGet('api/v1.0/users/', resp.data.access_token);
            dispatch( setAuthInformation( respData.data ) );
            Cookies.set('token', resp.data.access_token);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo o contraseña incorrectos!',
            });
        }
    }
}