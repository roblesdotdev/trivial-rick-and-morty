import { combineReducers } from "redux";
import request from "./request/reducer";

const rootReducer = combineReducers({ request });

export default rootReducer;
