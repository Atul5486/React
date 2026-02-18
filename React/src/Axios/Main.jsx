import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Main = () => {
    const[data,setData]=useState([])
    console.log(data)
    useEffect(()=>{
        api();
    },[])
    const api= async ()=>{
      const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(response.data)
    }
    return (
        <div className='p-20'>
            {
                data.map((item,index)=>(
                    <div key={index}>hello {item.name}</div>
                ))
            }
        </div>
    )
}

export default Main