import { types } from '../../const/types';

const initState = {
    unitDataLote: [],
    unitData: []
}

export const unitsReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        
        case types.unitLoteData:
            return {
                ...state,
                unitDataLote: [ ...action.payload ]
            }

        case types.unitData:
            return {
                ...state,
                unitData: [ ...action.payload ]
            }

        case types.deleteUnit:
            return {
                ...state,
                unitDataLote: [],
                unitData: []
            }

        default:
            return state;
    }
}