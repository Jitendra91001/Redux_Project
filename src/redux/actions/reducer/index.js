import { combineReducers } from "redux";
import { crudReducer } from "./crudReducer";

const rootReducer=combineReducers(
    {
        crudReducer:crudReducer
    }
)

export {rootReducer}