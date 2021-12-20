import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const authURL = process.env.REACT_APP_AUTH_API_URL

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

export {
    fetchToGet,
    fetchToAuth,
    fetchGet
}