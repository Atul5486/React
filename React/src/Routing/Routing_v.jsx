import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from '../Navbar'
import Layout from './Layout'

const Routing_v = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
      path:'/about',
      element:<About/>,
      loader:()=>{
        return fetch("https://jsonplaceholder.typicode.com/users")
      }
    },
    {
      path:'/contact',
      element:<Contact/>
    },
      ]

    },
    
])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routing_v  