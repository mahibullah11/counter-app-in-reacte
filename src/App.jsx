import { useState } from 'react'

import './App.css'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(Count => Count + 1);
  };

  const decrement = () => {
    if(setCount(Count => Count - 1)){

    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
