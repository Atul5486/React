import React, { useState } from 'react'

const Navbar = () => {
    const [visible,setVisible]=useState(false);
  return (
    <>
    <div className='w-full bg-[lightseagreen] p-3 flex items-center justify-between'>
      <h3 className='font-bold text-xl'>Logo</h3>
      <ol className='flex gap-5 max-sm:hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
        <li>Help</li>
      </ol>
      <div className='flex gap-2'>
        <span>logo1</span>
        <span>logo2</span>
      <h3 onClick={()=>setVisible(!visible)} className='sm:hidden cursor-pointer'>Bar</h3>
      </div>
    </div>
    <div className={`w-40 h-screen bg-black p-3 absolute top-0 transition-linear duration-500 ${visible ? "left-0 rounded-[0]": '-left-50 rounded-[50%]'} sm:hidden`}>
        <ol className='flex flex-col gap-5 m-2'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
        <li>Help</li>
      </ol>
      </div>
    </>
  )
}

export default Navbar
