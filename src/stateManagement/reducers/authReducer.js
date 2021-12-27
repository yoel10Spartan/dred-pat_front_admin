import { types } from '../../const/types';

const initState = {
    checking: true,
    info_user: {}
}

export const authReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case types.authSetInformation:
            return {
                ...state,
                info_user: action.payload,
                checking: false 
            }
            
        case types.authDeleteInformation:
            return {
                ...state,
                info_user: {},
                checking: false
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        default:
            return state;
    }
}