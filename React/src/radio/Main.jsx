import React, { useState } from 'react'

const Main = () => {
  const[gender,setGender]=useState('male');
  console.log(gender)
  return (
    <div>
      <label htmlFor='male'>
      <input type="radio" id='male' name='gender' value="male" onChange={(e)=>{
        setGender(e.target.value)
      }}/>Male
      </label>    
        <br/>
      <label htmlFor='female'>
      <input type="radio" id='female' name='gender' value="female" onChange={(e)=>{
        setGender(e.target.value)}}/>Female
      </label>    
        <br/>
      <label htmlFor='other'>
      <input type="radio" id='other' name='gender' value="other" onChange={(e)=>{
        setGender(e.target.value)}}/>Other
      </label>    
    </div>
  )
}

export default Main