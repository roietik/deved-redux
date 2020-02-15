import React from "react";
// import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Count from "./Count";

function Counter({ children, counterReducer, wtf }) {
  // const counterReducer = useSelector(state => state.counterReducer),
  //   isLogged = useSelector(state => state.loggedReducer),
  //   counts = counterReducer.counts;

  console.log("counts from Counter", [wtf]);

  return (
    <div>
      {[...wtf].map((count, idx) => {
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
