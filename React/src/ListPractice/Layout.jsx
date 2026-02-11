import React from 'react'
import data from './data.json'

const Layout = () => {
  return (
    <div className='flex flex-col gap-3 p-3 '>
    {
      data.map((item,index)=>(
        <div key={index} className='flex justify-between items-center p-5 bg-black/50 gap-3 rounded-lg'>
      <div className='flex justify-between items-center gap-30'>
        <img className='w-40 rounded-lg'  src={item.image}/>
      <div>
      <div>
       <h3 className='font-bold text-lg'>{item.title}</h3>
       <p>⭐<span className='text-white/50'>{item.rating} | {item.reviews}</span></p>
      </div>
       <ul> 
       {item.details.map((items,i)=>(
        <li className='list-disc ml-6' key={i}>{items}</li>
       )
       )}
       </ul>
       <div className='text-green-400'>
        <p>{item.offers.exchangeOffer}</p>
        <p className='text-green-300'>{item.offers.bankOffer}</p>
       </div>
      </div>
      </div>
      <div className='flex flex-col items-end'>
       <p className='text-lg font-bold'>{item.price}</p>
       <p className='text-white/50 line-through text-sm'>{item.originalPrice}</p>
        <p className='text-green-500'>{item.discount}</p>
      </div>
    </div>
      ))
    }
    </div>
  )
}

export default Layout
