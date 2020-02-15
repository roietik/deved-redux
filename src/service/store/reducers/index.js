import counterReducer from "./counterReducer";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  counter: counterReducer,
  loggedReducer
});

export default appReducer;
