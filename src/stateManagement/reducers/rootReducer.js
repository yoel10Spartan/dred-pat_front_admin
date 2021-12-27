import { combineReducers } from "redux";
import { artefactosReducer } from "./artefactosReducer";
import { authReducer } from "./authReducer";
import { fileReducer } from "./fileReducer";
import { loadingReducer } from "./loadingReducer";
import { recordsReducer } from "./recordsReducer";
import { unitsReducer } from "./unitsReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    users: usersReducer,
    file: fileReducer,
    artefactos: artefactosReducer,
    records: recordsReducer,
    units: unitsReducer
});