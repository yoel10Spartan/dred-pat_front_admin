import { useEffect } from 'react'
import Swal from 'sweetalert2';

export const useLoad = ( loader, information ) => {
    useEffect(() => {
        if( loader ){
            Swal.fire({
                title: information.title,
                html: information.description,
                allowOutsideClick: false,
                allowEscapeKey: false,
                backdrop: true,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
        }
        if( !loader ){
            Swal.close();
        }
    }, [loader]);
}
