import React, { useRef } from 'react';
import Counter from './components/Counter';
import { useDispatch } from 'react-redux';
import { add } from './service/store/actions';

function App() {

  const dispatch = useDispatch(),
        refAdd = useRef();
  return (
    <div>
      <h1>DevEd Redux</h1>
      <Counter>
        <div className="add">
          <h2>Add: </h2>
          <input className="counterInput" type="number" ref={refAdd} />
          <button onClick={() => dispatch(add(refAdd.current.value))}>add</button>
        </div>
      </Counter>
    </div>
  )
}

export default App;
