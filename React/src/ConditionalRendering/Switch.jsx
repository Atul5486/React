import React from 'react'

const Switch = () => {
    const option='c';
  switch(option){
    case 'a': return <p>Option a is selected</p>
    case 'b': return <p>Option b is selected</p>
    case 'c': return <p>Option c is selected</p>
    default : return <p>Default selected</p>
  }
}

export default Switch
