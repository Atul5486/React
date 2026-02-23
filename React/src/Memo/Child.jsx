import React, { memo, useEffect } from 'react'

const Child = ({count}) => {
    useEffect(()=>{
     console.log("Child rendering")   
    })
  return (
    <div>
    <h1>{count}</h1>
      Child
    </div>
  )
}
const MemoChild=memo(()=>(
    <Child/>
))

export default MemoChild
