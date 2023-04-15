import React, { useState } from 'react'
import rishav from '../Redux/Store';

 const Increment = () => {
    const [counter, setCounter] = useState(0);
    
    rishav.dispatch(
        {
            type: "counter",
            count: counter,
        }
    )

  return (
    <div className='inc'>
        <button onClick={(e) => setCounter(counter + 1)}>Increment</button>
        <button onClick={(e) => setCounter(counter - 1)}>Decrement</button>
        <button onClick={(e) => setCounter(0)}>Reset</button>
    </div>
  );
}


export default Increment;