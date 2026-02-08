import {useState} from 'react'
import Button from './Button'
const colors = ['pink', 'blue','red', 'lightseagreen', 'tomato','lightcoral']
const ColorSwitcher = () => {
    const [currColor, setColor] = useState(colors[0])
  return (
    <div>
      <h1>🎨 Color Switcher</h1>
        {
            colors.map(color => (
               <Button state={setColor} color={color}
                key={color}>{color}</Button>   
            ))
            //

        }
        <div style={{backgroundColor:currColor}} className='m-auto w-[300px] h-[300px] rounded-xl content-center border-2 '>
            Color Box
        </div>
    </div>
  )
}

export default ColorSwitcher
