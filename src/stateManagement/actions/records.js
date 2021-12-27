import { fetchToGet } from '../../utils/fetch';
import { types } from '../../const/types';
import { finishLoading, startLoading } from './loading';

const setDirectories = ( items ) => ({
    type: types.recordsDirectories,
    payload: items
});

const setFiles = ( items ) => ({
    type: types.recordsFiles,
    payload: items
});

const setURLFile = ( item ) => ({
    type: types.recordsUrlFile,
    payload: item
});

const deleteURLFile = () => ({ type: types.deleteUrlFile });

export const setDirectory = ( item ) => ({
    type: types.directoryInsert,
    payload: item
});

export const deleteFiles = () => ({ type: types.recordsFilesDelete });

export const deleteDirectories = () => ({ type: types.recordsDirectoriesDelete });

export const deleteURL = () => ({type: types.deleteUrlFile});

export const getRecords = (directory_address, folder='Proyecto__DReD-PAT') => {
    return async ( dispatch ) => {
        await dispatch( deleteDirectories() );
        await dispatch( deleteFiles() );
        await dispatch( startLoading('loadRecords') );
        const resp = await fetchToGet(
            `api/v1.0/files/get_files_directories/${folder}/${directory_address}`
        );
        const data = await resp.json();
        if(data.path){
            await dispatch( setDirectories(data.directories) );
            await dispatch( setFiles(data.files) );
            console.log(directory_address);
            console.log(data.directories);
        }
        await dispatch( finishLoading('loadRecords') );
    }
}

export const getFiles = (directory_address, folder) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadFiles') );
        const resp = await fetchToGet(
            `api/v1.0/files/get_files_directories/${folder}/${directory_address}`
        );
        const data = await resp.json();
        if(data.path){
            dispatch( setFiles(data.files) );
        } else {
            dispatch( deleteFiles() );
        }
        dispatch( finishLoading('loadFiles') );
    }
}

export const getDirectories = (directory_address, folder) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadDirectories') );
        const resp = await fetchToGet(
            `api/v1.0/files/get_files_directories/${folder}/${directory_address}`
        );
        const data = await resp.json();
        if(data.path){
            dispatch( setDirectories(data.directories) );
            dispatch( deleteFiles() );
            dispatch( deleteURLFile() );
        } else {
            dispatch( deleteDirectories() );
            dispatch( deleteFiles() );
            dispatch( deleteURLFile() );
        }
        dispatch( finishLoading('loadDirectories') );
    }
}

export const insertImage = (file_address, folder) => {
    return async ( dispatch ) => {
        const response = await fetchToGet(`api/v1.0/files/download_file/${folder}/${file_address}`);
        if(response.ok){
            await dispatch( setURLFile(response.url) );
        }
    }
}

export const downloadFile = (file_address) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadCompress') );
        const response = await fetchToGet(`api/v1.0/files/download_file/Proyecto__DReD-PAT/${file_address}`);
        if(response.ok){
            await dispatch( setURLFile(response.url) );
        }
        dispatch( finishLoading('loadCompress') );
    }
}