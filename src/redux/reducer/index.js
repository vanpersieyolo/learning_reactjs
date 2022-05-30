
import { combineReducers } from "redux";
import firstDataReducer from "./firstDataReducer";

const rootReducer = combineReducers({
    firstData: firstDataReducer
});

export default rootReducer;