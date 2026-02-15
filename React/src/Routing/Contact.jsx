import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate();
  return (
    <>
    <div>Contact</div>
    <button onClick={()=>navigate('/contact/a1')}>A1</button>
    <button onClick={()=>navigate('/contact/a2')}>A2</button>
    <Outlet/>
    </>
  )
}

export default Contact