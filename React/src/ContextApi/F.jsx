import React from 'react'
import { useMyContext } from './Context'

const F = () => {
  const {setCount}=useMyContext();
  return (
    <div className='p-5 bg-green-800'>
    F
    <br/>
    <button className='border-1 border-black' onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default F