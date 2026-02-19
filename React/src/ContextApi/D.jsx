import React from 'react'
import { useMyContext } from './Context';

const D = () => {
    const data=useMyContext();
  return (
    <div className='p-10 bg-green-800'>
    D
    <p>{data.count}</p>
    <br/>
    <button className='border-1 border-black' onClick={()=>data.setCount(prev=>prev-1)}>Decrement</button>
    </div>
  )
}

export default D