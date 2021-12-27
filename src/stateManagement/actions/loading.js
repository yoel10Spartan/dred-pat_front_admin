import { types } from '../../const/types';

export const startLoading = ( keyChange ) => ({
    type: types.loadingStart,
    payload: keyChange
});
export const finishLoading = ( keyChange ) => ({
    type: types.loadingFinish,
    payload: keyChange
});