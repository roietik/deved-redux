import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';


const appReducer = combineReducers({
    counterReducer,
    loggedReducer
});

export default appReducer;