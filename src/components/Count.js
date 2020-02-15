import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchInc,
  fetchDec,
  fetchReset,
  fetchDel,
  fetchChange
} from "../service/store/actions/counterActions";

export default function Count({ count, idx }) {
  const [valFromEvent, setValFromEvent] = useState(" "),
    dispatch = useDispatch(),
    changeRef = useRef(),
    handleSubmit = e => {
      e.preventDefault();
      dispatch(fetchChange(valFromEvent, count, idx));
      changeRef.current.value = "";
    },
    handleChange = e => {
      setValFromEvent(e.target.value);
    };

  return (
    <div>
      <h2>Counter: {count.num}</h2>
      <button onClick={() => dispatch(fetchInc(5, count, idx))}>+</button>
      <button onClick={() => dispatch(fetchDec(5, count, idx))}>-</button>
      <button onClick={() => dispatch(fetchReset(0, count, idx))}>reset</button>
      <button onClick={() => dispatch(fetchDel(count, idx))}>del</button>
      <form className="change" onSubmit={handleSubmit}>
        <input
          className="counterInput"
          type="number"
          ref={changeRef}
          defaultValue={valFromEvent}
          onChange={handleChange}
        />
        <button type="submit" value="Submit">
          change
        </button>
      </form>
    </div>
  );
}
