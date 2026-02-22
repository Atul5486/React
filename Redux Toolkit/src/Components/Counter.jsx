import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrement, increment } from '../Store/Counter/counterSlice';

function Counter() {
  const dispatch=useDispatch();
  const [value, setValue] = useState();
  const storeValue=useSelector(state=>state.counter.value);

   const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

  const handleChangeByValue=()=>{
      dispatch(changeByValue(value))
  }
  return (
    <>
            <h2>{storeValue}</h2>
    <div className='flex gap-4 items-center'>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <input className='border' type="number" onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleChangeByValue}>Change By Value</button>
        </div>
    </>
  )
}

export default Counter
