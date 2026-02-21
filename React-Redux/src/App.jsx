import './App.css'
import { useDispatch } from 'react-redux'
import { addToProduct } from './redux/action';
import Product from './Product';

function App() {
  const dispatch=useDispatch();

  const handleAddToProduct=()=>{
    dispatch(addToProduct({
      id:1,
      name:'sumsung',
    }))
  }
  return (

    <>
     <h1>Hello</h1>
     <button onClick={handleAddToProduct}>Click</button>
     <Product/>
    </>
  )
}

export default App
