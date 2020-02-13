import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { inc, dec, reset, del, eventVal, change } from '../service/store/actions';

function Counter({ children }) {
    
    const counterReducer = useSelector(state => state.counterReducer),
        isLogged = useSelector(state => state.loggedReducer),
        dispatch = useDispatch(),
        counts = counterReducer.counts,
        eVal = useSelector(state => state.counterReducer.eventVal),
        refInput = useRef();

    return (
        <div>

            {counts.map((count, idx) => {

                const handleChange = e => {
                    dispatch(eventVal(idx, e))
                }

                return (
                    <React.Fragment key={uuid()}>
                        <h2 key={uuid()}>Counter: {count}</h2>
                        <button key={uuid()} onClick={() => dispatch(inc(5, idx))}>+</button>
                        <button onClick={() => dispatch(dec(5, idx))}>-</button>
                        <button onClick={() => dispatch(reset(idx))}>reset</button>
                        <button onClick={() => dispatch(del(idx))}>del</button>
                        <form className="change" onSubmit={() => dispatch(change(idx, eVal))}>
                            <label> Name:
                            <input className="counterInput" type="number" ref={refInput} defaultValue={eVal} onChange={handleChange} />
                            {console.log('eVal',eVal)}
                            </label>
                            <button type="submit" value="Submit">change</button>
                        </form>
                    </React.Fragment>
                )
            })}

            <div className="actions">
                {children}
            </div>
            {!isLogged && <p>Valuable information I shouldn't see</p>}
        </div>
    )
}

export default Counter;
