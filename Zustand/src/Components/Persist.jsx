import React from 'react'
import {  } from 'zustand'
import context from './Store'

const Persist = () => {
    const count=context(state=>state.count);
    const name=context(state=>state.name);
    const increment=context(state=>state.increment);
  return (
     <div>
    <p>{name}</p>
    <p>{count}</p>
    <button onClick={increment}>increment</button>
 </div>
  )
}


export default Persist