import React from 'react'

const Object = () => {
    const select='error'
    let obj={
        loading:<p>Loading</p>,
        error:<p>Error</p>,
        success:<p>SuccessFully </p>
    }
    console.log(obj[select])
  return (
    <div>
     {obj[select]}
    </div>
  )
}

export default Object
