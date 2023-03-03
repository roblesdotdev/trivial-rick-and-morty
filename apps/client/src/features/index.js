import { combineReducers } from "redux";

const foo = (state = {}, _) => {
  return state;
};

const rootReducer = combineReducers({ foo });

export default rootReducer;
