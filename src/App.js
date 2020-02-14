import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import { useDispatch } from 'react-redux';
import { add } from './service/store/actions';
function App() {

  const [input, setInput] = useState(" "),

    dispatch = useDispatch(),
    refAdd = useRef(),

    handleSubmit = e => {
      e.preventDefault();
      dispatch(add(input))
      refAdd.current.value = " "
    },
    handleChange = e => {
      setInput(e.target.value)
    }

  return (
    <div>
      <h1>DevEd Redux</h1>
      <Counter>
        <div className="add">
          <h2>Add: </h2>
          <form className="add" onSubmit={handleSubmit}>
            <input className="counterInput" type="text" ref={refAdd} defaultValue={input} onChange={handleChange} />
            <button type="submit" value="Submit">add</button>
          </form>
        </div>
      </Counter>
    </div>
  )
}

export default App;
