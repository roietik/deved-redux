import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  inc,
  dec,
  reset,
  del,
  change
} from "../service/store/actions/counterActions";

export default function Count({ count, idx }) {
  const [event, setEvent] = useState(" "),
    dispatch = useDispatch(),
    changeRef = useRef(),
    handleSubmit = e => {
      e.preventDefault();
      dispatch(change(idx, event));
      changeRef.current.value = " ";
    },
    handleChange = e => {
      setEvent(e.target.value);
    };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(inc(5, idx))}>+</button>
      <button onClick={() => dispatch(dec(5, idx))}>-</button>
      <button onClick={() => dispatch(reset(idx))}>reset</button>
      <button onClick={() => dispatch(del(idx))}>del</button>
      <form className="change" onSubmit={handleSubmit}>
        <input
          className="counterInput"
          type="number"
          ref={changeRef}
          defaultValue={event}
          onChange={handleChange}
        />
        <button type="submit" value="Submit">
          change
        </button>
      </form>
    </div>
  );
}
