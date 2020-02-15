import React, { useRef, useState, useEffect } from "react";
import uuid from "react-uuid";
import Count from "./Count";
import { useDispatch, useSelector } from "react-redux";
import { add, fetchAll } from "../service/store/actions/counterActions";

function Counter() {
  const counter = useSelector(state => state.counter);
  const [input, setInput] = useState(" ");
  const dispatch = useDispatch();
  const refAdd = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(add(input));
    refAdd.current.value = " ";
  };
  const handleChange = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

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
              type="text"
              ref={refAdd}
              defaultValue={input}
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
