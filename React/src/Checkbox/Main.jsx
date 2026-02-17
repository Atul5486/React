import {useState} from 'react'

const Main = () => {
    const [lang,setLang]=useState({
        html:false,
        css:false,
        js:false
    })
    const handleChange=(e)=>{
        const key=e.target.name;
        setLang({...lang,[key]:e.target.checked})
        console.log(key);
    }
    const checkAll=Object.values(lang).every(Boolean);
    const handleAll=(e)=>{
        setLang({html:e.target.checked,css:e.target.checked,js:e.target.checked})
    }
  return (
    <div className='p-10'>

    <label htmlFor='all'>
        <input type='checkbox' id='all' name='all' checked={checkAll} onChange={handleAll} />Select All
    </label>
    <br/>
    {
    Object.keys(lang).map((item)=>(
        <label htmlFor={item} key={item}>
        <input type='checkbox' id={item} name={item} checked={lang[item]} onChange={handleChange} />{item}
            <br/>
        </label>
    
    ))
    }
    
    <br/>

    </div>
  )
}

export default Main