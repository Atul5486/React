import React from 'react'

const List = (props) => {
    console.log(props)
    let arr=["Hello","Hii","How","Are","You"]
    let lang=[
        ['html','css','js','react'],
        ['Aws','s3','Docker','Kubernet'],
        ['nodejs','express','python']
    ]
  return (
    <div>
        <h1>Single List</h1>
        {
            arr.map((item,index)=>{
                   return <li key={index}>{item}</li>
            })
        }
        <h1>Nested List</h1>
        {
             lang.map((item)=>{
               return(
                item.map((elem)=>{return <li key={elem}>{elem} </li>})
             )})
        }
    </div>
  )
}

export default List
