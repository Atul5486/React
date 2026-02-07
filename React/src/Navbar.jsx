import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='w-full bg-[lightseagreen] flex items-center gap-5 text-2xl list-none cursor-pointer '>

    {/* <Link to='/'><li>Home</li></Link>
    <Link to="/about"><li>About</li></Link>
    <Link to="/contact"><li>Contact</li></Link> */}


    <NavLink className={({isActive})=>isActive  ? 'bg-red-500' :''} to='/'><li>Home</li></NavLink>
    <NavLink className={({isActive})=>isActive  ? 'bg-red-500' :''}  to="/about"><li>About</li></NavLink>
    <NavLink className={({isActive})=>isActive  ? 'bg-red-500' :''}  to="/contact"><li>Contact</li></NavLink>
    <NavLink className={({isActive})=>isActive  ? 'bg-red-500' :''}  to="/123"><li>Id</li></NavLink>
    <NavLink className={({isActive})=>isActive  ? 'bg-red-500' :''}  to="/help"><li>Help</li></NavLink>


    </div>
      <button className='mt-10 bg-red-500' onClick={()=>navigate('/about')}>
        Go To About
      </button>
      
    </>
  )
}

export default Navbar