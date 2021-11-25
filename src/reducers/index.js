import crudReducer from "./crudReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    crud: crudReducer,
});

export default allReducers;