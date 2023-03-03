import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../features";

const configureStore = () => {
  const middlewares = [thunk];
  const middlewareEnhance = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhance)
  );

  return store;
};

export { configureStore };
