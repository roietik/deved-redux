import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { add, all } from "./service/store/actions";
import counterReducer from "./service/store/reducers";

import Counter from "./components/Counter";
import { useDispatch } from "react-redux";
import FetchApi from "./service/api/FetchApi";

function App() {
  const [input, setInput] = useState(" "),
    dispatch = useDispatch(),
    refAdd = useRef(),
    handleSubmit = e => {
      e.preventDefault();
      dispatch(add(input));
      refAdd.current.value = " ";
    },
    handleChange = e => {
      setInput(e.target.value);
    };

  useEffect(() => {
    FetchApi.getFetch()
      .then(items => {
        console.log(items);
        this.props.all(items);
      })
      .catch(isError => console.log(isError));
  }, []);

  return (
    <div>
      <h1>DevEd Redux</h1>
      <Counter counterReducer={this.props.counterReducer}>
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
      </Counter>
    </div>
  );
}
console.log("counterReducer", counterReducer);

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    counterReducer: state.counterReducer
  };
};
const mapDispatchToProps = { all };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
