import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec, reset } from '../service/store/actions';

function Counter({children}) {

    const counter = useSelector(state => state.counterReducer),
          isLogged = useSelector(state => state.loggedReducer),
          dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <div className="actions">
                <button onClick={() => dispatch(inc(5))}>+</button>
                <button onClick={() => dispatch(dec(5))}>-</button>
                <button onClick={() => dispatch(reset())}>reset</button>
                {children}
            </div>
            {!isLogged && <p>Valuable information I shouldn't see</p>}
        </div>
    )
}

export default Counter;
