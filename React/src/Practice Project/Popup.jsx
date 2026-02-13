import React from 'react'

const Popup = ({name,setpop}) => {
  return (
    <>
    <div className='h-screen w-screen bg-[transparent] flex items-center justify-center'>
    <div className='flex justify-end px-2 absolute top-0 right-0'>
        <button onClick={()=>setpop(false)}>❌</button>
    </div>
    <div className='flex flex-col w-[500px] h-[300px] gap-3 bg-zinc-700 rounded-lg items-center justify-center'>
        <h3 className='text-xl'>⚠ {name}</h3>
        <p>Are you sure want to {name} this?</p>
        <div className='flex gap-8'>
        <button onClick={()=>setpop(false)} className='bg-red-500'>no</button>
        <button  onClick={()=>{
        setpop(false)
        alert(`${name} successfully`)}} className='bg-green-500'>yes</button>
        </div>
    </div>
    </div>

    </>
  )
}

export default Popup
