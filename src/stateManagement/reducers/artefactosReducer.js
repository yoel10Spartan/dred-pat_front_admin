import { types } from '../../const/types';

const initState = {
    columnsTable: [],
    rowsTable: [],
    unitData: [],
    elementsTable: 0
}

export const artefactosReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case types.artefactosColums:
            return {
                ...state,
                columnsTable: [ ...action.payload ] 
            }

        case types.artefactosRows:
            return {
                ...state,
                rowsTable: [ ...action.payload ] 
            }

        case types.artefactosElements:
            return {
                ...state,
                elementsTable: action.payload 
            }

        case types.unitLoteData:
            return {
                ...state,
                unitData: [ ...action.payload ]
            }

        default:
            return state;
    }
}