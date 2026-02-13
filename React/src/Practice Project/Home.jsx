import React from 'react'
import { useState } from 'react'
import Popup from './Popup'

const Home = () => {
  const [del,setDel]=useState(false);
  const [edit,setEdit]=useState(false);
//   const [dis,setDis]=useState(false);
  function handle(set){
    set(true);
}
  return (
    <>   
    <div className='w-screen h-screen flex justify-center items-center '>
    {
    del ?
    <Popup name="Delete" setpop={setDel} />
    : edit ?
    <Popup name="Edit" setpop={setEdit} />
    :
    (<div className='flex gap-5'>
      <button onClick={()=>handle(setDel)} style={{"backgroundColor":"#1a1a1a"}}>Delete</button>
      <button onClick={()=>handle(setEdit)} style={{"backgroundColor":"#1a1a1a"}}>Edit</button>
    </div>)
    }
    </div>
    </>
  )
}

export default Home
