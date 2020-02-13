import React, { useRef, useState }  from 'react';
import { useDispatch } from 'react-redux';
import { inc, dec, reset, del, change } from '../service/store/actions';


export default function Count({count, idx}) {
    const dispatch = useDispatch();
    const changeRef = useRef();

    const [event, setEvent] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(change(idx, event))
        changeRef.current.value = "";
    }
    const handleChange = e => {
        setEvent(e.target.value)
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(inc(5, idx))}>+</button>
            <button onClick={() => dispatch(dec(5, idx))}>-</button>
            <button onClick={() => dispatch(reset(idx))}>reset</button>
            <button onClick={() => dispatch(del(idx))}>del</button>
            <form className="change" onSubmit={handleSubmit}>
                <input className="counterInput" type="number"  ref={changeRef} defaultValue={count} onChange={handleChange} />
                <button type="submit" value="Submit">change</button>
            </form>
        </div>
    )
}
