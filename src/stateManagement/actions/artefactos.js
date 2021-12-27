import { fetchToGet } from '../../utils/fetch';
import { types } from '../../const/types';
import { startLoading, finishLoading } from './loading';

const setColumnsTable = ( items ) => ({
    type: types.artefactosColums,
    payload: items
});

const setRowsTable = ( items ) => ({
    type: types.artefactosRows,
    payload: items
});

const setElementsTable = ( items ) => ({
    type: types.artefactosElements,
    payload: items
});

export const getColumnsTable = (id_table) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadColumns') );
        const resp = await fetchToGet(`api/v1.0/archeology/get_columns/${id_table}`);
        const data = await resp.json();

        if(data){
            dispatch( setColumnsTable(data.list_elements) );
        } else {
            dispatch( setColumnsTable([]) );
        }
        dispatch( finishLoading('loadColumns') );
    }
}

export const getRowsTable = (id_table, skip=0, limit=10, lote=null) => {
    return async ( dispatch ) => {
        dispatch( startLoading('loadTable') );
        const resp = await fetchToGet(
            `api/v1.0/archeology/get_items_parts/${id_table}?skip=${skip}&limit=${limit}${lote ? `&lote=${lote}`: ''}`
        );
        const data = await resp.json();

        if(data){
            dispatch( setRowsTable(data) );
        } else {
            dispatch( setColumnsTable([]) );
        }
        dispatch( finishLoading('loadTable') );
    }
}