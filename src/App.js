import React from 'react';
import Counter from './components/Counter';
import { useDispatch } from 'react-redux';
import { inc, dec } from './service/store/actions'


function App() {
  const dispatch = useDispatch();
  console.log('dis:', dispatch(inc))
  return (
    <div>
      <h1>DevEd Redux</h1>
      <Counter>
        <div className="buttons">
          <button onClick={() => dispatch(inc(5))}>+</button>
          <button onClick={() => dispatch(dec(5))}>-</button>
        </div>
      </Counter>
    </div>
  )
}

export default App;
