import { useEffect, useState } from 'react'


function Card() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Component mounted'); 
  },[]);
  function handle(){
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
  }
  return (
    <>
    {count ? <h1>{count}</h1> : <h1>Goodbye</h1>}
      <button className='text-blue-500' onClick={handle}>
        count
      </button>
    </>
  )
}

export default Card
