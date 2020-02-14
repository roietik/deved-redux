import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import getInitialState from "./getInitialState";

import { combineReducers } from "redux";

const appReducer = combineReducers({
  counterReducer,
  loggedReducer,
  getInitialState
});

export default appReducer;
