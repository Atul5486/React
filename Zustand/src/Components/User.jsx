import React from 'react'
import MyContext from './MyContext'

const User = () => {
    const data=MyContext();
    console.log(data)
    const handleClick=()=>{
        data.incerement();
    }
    const handleCapital=()=>{
        data.capitalizeName();
    }
  return (
    <div>
    <p>{data.name}</p>
    <p>{data.count}</p>
    <button onClick={handleClick}>incerement</button>
    <button onClick={handleCapital}>capitalizeName</button>
    </div>
  )
}

export default User