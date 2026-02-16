import React, { useState } from 'react'

const Main = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const data={
        India:['Delhi','Indore','Kolkata'],
        Japan:['Chi gnag','Tokiyo','Photnig'],
        USA:['Log angloes','California','Washington'],
        Australia:['Sydeny','Adelaide','Melbourn'],
    }
  return (
    <div>
        <select value={country} onChange={(e)=>{
            setCountry(e.target.value)
        }}>
        {
            Object.keys(data).map((item)=>{
                return(
                    <option className='text-black' key={item} value={item}>{item}</option>
                )
            })
        }
        </select>
        {country &&
        <select value={city} onChange={(e)=>{
            setCity(e.target.value);
        }}>
        {
            data[country].map((item)=>{
                return(
                    <option className='text-black' key={item} value={item}>{item}</option>

                )
            })
        }
            </select>
        }
    </div>
  )
}

export default Main