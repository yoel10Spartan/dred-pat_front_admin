import Swal from "sweetalert2";
import { types } from "../../const/types";
import { fetchToImage } from "../../utils/fetch";
import { finishLoading, startLoading } from "./loading";

const setPathFile = ( url ) => ({
    type: types.fileSetPath,
    payload: url
}); 

export const uploadImage = ( file ) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadUploadFile') );
        const resp = await fetchToImage('images/upload', file, 'file');
        const data = await resp.json();
        
        if(data.ok){
            dispatch( setPathFile( data.url_security ) );
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Solo extenciones .jpg, .jpeg, .png, .webp!',
            });
        }
        dispatch( finishLoading('loadUploadFile') );
    }
}