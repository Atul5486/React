import React from 'react'
import { useState } from 'react';

const Css = () => {
    const [color,setColor]=useState(true);
  return (
    <>

    <div className={`${color ? 'bg-red-500':'bg-blue-600'} p-10 rounded-lg m-5`}>
      Condition in tailwind {color}
      <br/>
    </div>
      <button onClick={()=>setColor(!color)}>Click Me </button>
    </>
  )
}

export default Css
