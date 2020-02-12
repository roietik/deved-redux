import React from 'react';
import { useSelector } from 'react-redux';


function Counter() {
    const counter = useSelector(state => state.counterReducer);
    const isLogged = useSelector( state =>state.loggedReducer);

    return (
        <div>
            <h2>Counter: {counter}</h2>
            {!isLogged && <p>Valuable information I shouldn't see</p>}
        </div>
    )
}

export default Counter;
