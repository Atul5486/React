import React, { useMemo, useState } from 'react'

const UseMemo = () => {

const[expensive,setExpensive]=useState(0);
const[quantity,setQuantity]=useState(0);
    const expensiveCal=()=>{
        for(let i=0;i<999999999;i++){
            return Math.floor(Math.random()*10);
        }
    }

    useMemo(()=>{
        const result=expensiveCal();
        setExpensive(result);
        console.log(quantity);
    },[quantity])
  return ( 
    <div>
     <h1>{expensive}</h1>
     {quantity}
     <button onClick={()=>setQuantity(prev=>prev+1)}>Increase</button>
    </div>
  )
}

export default UseMemo
