import { types } from '../../const/types';

const initState = {
    users: []
}

export const usersReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case types.usersGetAll:
            return {
                ...state,
                users: [ ...action.payload ]
            }
            
        case types.usersDeleteAll:
            return {
                ...state,
                users: []
            }

        case types.usersDeleteID:
            return {
                ...state,
                users: state.users.filter( user => user.id !== action.payload ? user : '' )
            }

        case types.userAdd:
            return {
                ...state,
                users: [ ...state.users, action.payload ]
            }

        default:
            return state;
    }
}