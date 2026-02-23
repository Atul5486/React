import React, { useEffect, useState } from 'react'
import Child from './Child'

const Parent = () => {

 const[count,setCount]=useState(0);
 const[name,setName]=useState("");

    const handleClick=()=>{
        setCount(prev=>prev+1);
    }
 useEffect(()=>{
    console.log(count)
 },[count])
  return (
    <div>
      Parent
      <Child count={count}/>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <input value={name} onChange={(e)=>setName(e.target.value)} type='text ' placeholder='Enter Your name'/>
    </div>
  )
}

export default Parent
