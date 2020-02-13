import React, { useRef } from 'react';
import Counter from './components/Counter';
import { useDispatch } from 'react-redux';
import { add } from './service/store/actions';

function App() {

  const dispatch = useDispatch(),
        refInput = useRef(),
        getRefVal = () => {return refInput.current.value};

  return (
    <div>
      <h1>DevEd Redux</h1>
      <Counter>
        <input type="number" ref={refInput} />
        <button onClick={() => dispatch(add(getRefVal()))}>add</button>
      </Counter>
    </div>
  )
}

export default App;
