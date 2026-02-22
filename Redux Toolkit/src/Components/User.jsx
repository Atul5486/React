import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../Store/User/userSlice'

const User = () => {
  const {users,error}=  useSelector(state=>state.user)
  console.log(users,error)
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  return (
    <div>User</div>
  )
}

export default User