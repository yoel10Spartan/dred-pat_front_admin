import { types } from '../../const/types';

const initState = {
    info_user: {}
}

export const authReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case types.authSetInformation:
            return {
                ...state,
                info_user: action.payload 
            }
            
        case types.authDeleteInformation:
            return {
                ...state,
                info_user: {}
            }

        default:
            return state;
    }
}