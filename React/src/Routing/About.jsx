import React from 'react'
import { useLoaderData } from 'react-router-dom'
const About = () => {
  const data=useLoaderData();
  console.log(data);
  return (
    <div>About
    {
      data.map((item,index)=>(
        <p key={index}>{item.name}</p>
      ))
    }
    </div>
  )
}

export default About