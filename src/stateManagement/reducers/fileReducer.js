import { types } from '../../const/types';

const initState = {
    pathFile: ''
}

export const fileReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case types.fileSetPath:
            return {
                ...state,
                pathFile: action.payload 
            }
            
        case types.fileDeletePath:
            return {
                ...state,
                pathFile: ''
            }

        default:
            return state;
    }
}