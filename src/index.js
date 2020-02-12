import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';

// INITIAL STATE
const initState = {
    count: 0
}

// STORE  ->  GLOBALIZED STATE  (globalny stan, trzyma cały stan aplikacji, dostępny we wszystkich komponentach)

// ACTIONS -> INCREMENT (pozwalają na zmiany w globalnym stanie)
const inc = () => {
    return {
        type: "INC"

    };
};

const dec = () => {
    return {
        type: "DEC"

    };
};

// REDUCER
const reducer = (state = initState.count, action) => {
    if( action.type === "INC") {
        return state + 1;
    }
    if( action.type === "DEC") {
        return state - 1;
    }
}

const store = createStore(reducer, composeWithDevTools());

// Display it in the console
store.subscribe(() => {
    console.log(store.getState());
  });

// DISPATCH (dispatch this action to the reducer)
store.dispatch(inc())
store.dispatch(dec())
store.dispatch(inc())
store.dispatch(inc())


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
