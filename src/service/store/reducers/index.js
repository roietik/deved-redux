import counterReducer from "./counterReducer";
import loggedReducer from "./isLogged";
import getInitialState from "./getInitialState";

import { combineReducers } from "redux";

const appReducer = combineReducers({
  counter: counterReducer,
  loggedReducer,
  getInitialState
});

export default appReducer;
