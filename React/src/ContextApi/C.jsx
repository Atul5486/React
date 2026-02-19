import React from 'react'
import { useMyContext } from './Context'

const C = () => {
  const data = useMyContext();
  return (
    <div className='p-10 bg-blue-800'>
      <p>{data.count}</p>
      C</div>
  )
}

export default C