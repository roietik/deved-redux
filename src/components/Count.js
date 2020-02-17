import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  axiosInc,
  axiosDec,
  axiosReset,
  axiosDel,
  axiosChange
} from "../service/store/actions/counterActions";

export default function Count({ count, idx }) {
  const [valFromEvent, setValFromEvent] = useState(" "),
    dispatch = useDispatch(),
    changeRef = useRef(),
    handleSubmit = e => {
      e.preventDefault();
      dispatch(axiosChange(valFromEvent, count, idx));
      changeRef.current.value = "";
    },
    handleChange = e => {
      setValFromEvent(e.target.value);
    };

  return (
    <div>
      <h2>Counter: {count.num}</h2>
      <button onClick={() => dispatch(axiosInc(5, count, idx))}>+</button>
      <button onClick={() => dispatch(axiosDec(5, count, idx))}>-</button>
      <button onClick={() => dispatch(axiosReset(0, count, idx))}>reset</button>
      <button onClick={() => dispatch(axiosDel(count, idx))}>del</button>
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
