import React from 'react'
import A from './A'
import B from './B'
import { Context } from './Context'

const Main = () => {
  return (
    <div>
    Main
    <Context>
      <A/>
      <B/>
    </Context>
    </div>
  )
}

export default Main