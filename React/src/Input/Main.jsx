import React from 'react'
import { useState } from 'react'
const Main = () => {
    const [data,setData]=useState({
        name:'',
        email:'',
    });
    function handler(e){
        const {name,value}= e.target;
        setData({...data,[name]:value})
    }

  return (
    <div>
    <br/>
     <input value={data.name} name='name' type='text' placeholder='Enter name' onChange={handler}/>
    <br/>
    <br/>
     <input value={data.email} name='email' type='text' placeholder='Enter Email' onChange={handler}/>
     <h1>{data.name}</h1>
     <h1>{data.email}</h1>
    </div>
  )
}

export default Main
