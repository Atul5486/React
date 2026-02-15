import React from 'react'
import { useParams } from 'react-router-dom'
const ContactId = () => {
  const param=useParams();
  return (
    <div>ContactId {param.cid}</div>
  )
}

export default ContactId