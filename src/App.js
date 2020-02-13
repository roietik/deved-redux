import React, { useRef } from 'react';
import Counter from './components/Counter';
import { useDispatch } from 'react-redux';
import { add } from './service/store/actions';

function App() {

  const dispatch = useDispatch(),
        ref = useRef();

  return (
    <div>
      <h1>DevEd Redux</h1>
      <Counter>
        <input type="number" ref={ref} />
        <button onClick={() => dispatch(add(ref.current.value))}>add</button>
      </Counter>
    </div>
  )
}

export default App;
