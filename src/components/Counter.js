import React from "react";
// import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Count from "./Count";

function Counter({ children, counterReducer }) {
  // const counterReducer = useSelector(state => state.counterReducer),
  //   isLogged = useSelector(state => state.loggedReducer),
  //   counts = counterReducer.counts;

  console.log("counts from Counter", counterReducer);

  return (
    <div>
      {counterReducer.map((count, idx) => {
        return (
          <React.Fragment key={uuid()}>
            <Count key={uuid()} count={count.num} idx={idx} />
          </React.Fragment>
        );
      })}

      <div className="actions">{children}</div>
      {/* {!isLogged && <p>Valuable information I shouldn't see</p>} */}
    </div>
  );
}

export default Counter;
