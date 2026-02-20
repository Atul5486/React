import React from 'react'
import MyContext from './MyContext'

const Subscription = () => {
   const count=MyContext(state=>state.count);
   const name=MyContext(state=>state.name);
    const increment =MyContext(state=>state.incerement);
  return (
    <div>
    <p>{name}</p>
    <p>{count}</p>
    <button onClick={increment}>incerement</button>
    </div>
  )
}

export default Subscription