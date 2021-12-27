import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const authURL = process.env.REACT_APP_AUTH_API_URL;
const fileURL = process.env.REACT_APP_FILE_API_URL;

console.log(authURL);

const fetchToGet = ( endpoint, method = 'GET' ) => {
    const url = `${ baseUrl }${ endpoint }`;
    if ( method === 'GET' ) {
        return fetch( url );
    }
}

const fetchToAuth = ( endpoint, data ) => {
    const url = `${ authURL }${ endpoint }`;
    return axios.post(url, data);
}

const fetchGet = ( endpoint, token ) => {
    const url = `${ authURL }${ endpoint }`;
    return axios.get(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const fetchToPost = ( endpoint, data, token ) => {
    const url = `${ authURL }${ endpoint }`;
    return axios.post(url, JSON.stringify(data), {
        headers: {
            'accept': 'application/json',
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
}

const fetchToDelete = ( endpoint, token ) => {
    const url = `${ authURL }${ endpoint }`;
    return axios.delete(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const fetchToImage = ( endPoint, img, key_form_data ) => {
    const url = `${ fileURL }${ endPoint }`;
    const formData = new FormData();

    if( Array.isArray( img ) ){
        for(let i of img){
            formData.append(key_form_data, i);
        }
    } else {
        formData.append(key_form_data, img);
    }

    return fetch( url, {
        method: 'POST',
        body: formData
    });
}

export {
    fetchToGet,
    fetchToAuth,
    fetchGet,
    fetchToDelete,
    fetchToPost,
    fetchToImage
}