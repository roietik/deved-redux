import React, { useRef, useState, useEffect } from "react";
import uuid from "react-uuid";
import Count from "./Count";
import { useDispatch, useSelector } from "react-redux";
import { axiosAdd, axiosAll } from "../service/store/actions/counterActions";

function Counter() {
  const counter = useSelector(state => state.counter),
    [valFromEvent, setValFromEvent] = useState(" "),
    dispatch = useDispatch(),
    refAdd = useRef(),
    handleSubmit = e => {
      e.preventDefault();
      dispatch(axiosAdd(valFromEvent));
      refAdd.current.value = "";
    },
    handleChange = e => {
      setValFromEvent(e.target.value);
    };

  useEffect(() => {
    dispatch(axiosAll());
  }, [dispatch]);

  return (
    <div>
      {counter.counts.map((count, idx) => {
        return (
          <React.Fragment key={uuid()}>
            <Count key={uuid()} count={count} idx={idx} />
          </React.Fragment>
        );
      })}

      <div className="actions">
        <div className="add">
          <h2>Add: </h2>
          <form className="add" onSubmit={handleSubmit}>
            <input
              className="counterInput"
              type="number"
              ref={refAdd}
              defaultValue={valFromEvent}
              onChange={handleChange}
            />
            <button type="submit" value="Submit">
              add
            </button>
          </form>
        </div>
      </div>
      {/* {!isLogged && <p>Valuable information I shouldn't see</p>} */}
    </div>
  );
}

export default Counter;
