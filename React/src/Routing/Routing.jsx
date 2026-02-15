import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import ContactId from './ContactId'
import About from './About'
import About1 from './About1'
import About2 from './About2'
import { Navigate } from 'react-router-dom'
const Routing = () => {
  return (
    <>
    {/* <div>Routing</div> */}
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}>
    <Route path='a1' element={<About1/>} />
    <Route path='a2' element={<About2/>} />
    </Route>
    <Route path='/:cid' element={<ContactId/>}/>
    <Route path='/help' element={<Navigate to={'/'} replace/>}/>
    </Routes>
    </>
  )
}

export default Routing