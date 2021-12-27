import { types } from '../../const/types';

const initState = {
    directories: [],
    files: [],
    urlDownloadFile: '',
    directory: ''
}

export const recordsReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case types.recordsDirectories:
            return {
                ...state,
                directories: [ ...action.payload ] 
            }

        case types.recordsFiles:
            return {
                ...state,
                files: [ ...action.payload ] 
            }

        case types.recordsUrlFile:
            return {
                ...state,
                urlDownloadFile: action.payload
            }

        case types.deleteUrlFile:
            return {
                ...state,
                urlDownloadFile: ''
            }

        case types.directoryInsert:
            return {
                ...state,
                directory: action.payload
            }

        case types.recordsFilesDelete:
            return {
                ...state, files: [] 
            }

        case types.recordsDirectoriesDelete:
            return {
                ...state, directories: [] 
            }

        default:
            return state;
    }
}