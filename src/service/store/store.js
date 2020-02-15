import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
