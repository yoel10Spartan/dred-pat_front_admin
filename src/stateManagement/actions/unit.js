import { types } from '../../const/types';
import { fetchToGet } from '../../utils/fetch';
import { finishLoading, startLoading } from './loading';

const setUnitLote = ( items ) => ({
    type: types.unitLoteData,
    payload: items
});

const setUnitData = ( items ) => ({
    type: types.unitData,
    payload: items
});

export const deleteUnitData = () => ({ type: types.deleteUnit });

export const getLoteUnit = ( id_db ) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadLoteUnit') );
        const resp = await fetchToGet(
            `api/v1.0/unidades/get_items_lote_id/${id_db}`
        );
        const data = await resp.json();
        if(Array.isArray(data)){
            dispatch( setUnitLote(data) );
        }
        dispatch( finishLoading('loadLoteUnit') );
    }
}

export const getDataUnit = ( id_db, id_item ) => {
    return async ( dispatch ) => {
        dispatch( startLoading('lodaDataUnit') );
        const resp = await fetchToGet(
            `api/v1.0/unidades/get_an_item/${id_db}/${id_item}`
        );
        const data = await resp.json();
        if(resp.ok){
            dispatch( setUnitData(data) );
        }
        dispatch( finishLoading('lodaDataUnit') );
    }
}