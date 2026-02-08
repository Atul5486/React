import React from 'react'
const Button = ({color,state}) => {
    function setColor(){
        state(color);
    }
  return (
   <button onClick={setColor} style={{backgroundColor:color}}>
    {color}
   </button>
  )
}

export default Button
