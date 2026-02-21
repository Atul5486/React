import React from 'react'
import { useSelector } from 'react-redux'

const Product = () => {
    // const state=useSelector(state=>state); //If I use then in that case it will re render component all time
    const products=useSelector(state=>state.products)
    console.log(products)
  return (
    <div>{products.map((product,index)=>(
        <span key={index}>{product.name}  </span>
    ))
    }</div>
  )
}

export default Product