import { types } from '../../const/types';

const initState = {
    load: {
        loadAuth: false,
        loadDeleteUser: false,
        loadAddUser: false,
        loadUploadFile: false,
        loadGetUsers: false,

        loadCompress: false,
        loadTable: false,
        loadColumns: false,
        loadRecords: false,
        loadDirectories: false,
        loadFiles: false,
        loadLoteUnit: false,
        lodaDataUnit: false
    }
}

const changeLoad = (objectLoad, matchValue, boolValue) => {
    let copyObjectLoad = objectLoad;
    for(let [key, value] of Object.entries(copyObjectLoad)){
        if(key === matchValue){copyObjectLoad[key] = boolValue}
    }
    return copyObjectLoad;
}

export const loadingReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case types.loadingStart:
            return {
                ...state,
                load: changeLoad(state.load, action.payload, true)
            }

        case types.loadingFinish:
            return {
                ...state,
                load: changeLoad(state.load, action.payload, false)
            }

        default:
            return state;
    }
}