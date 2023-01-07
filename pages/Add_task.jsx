

import React, { useEffect, useState } from 'react'

const Add_task = () => {
 
  const [data,setData]=useState("")
  const [task,setTask]=useState([])
  const [display,setDisplay]=useState(false)
 

  const getdata=()=>{
    fetch("https://lazy-fly-polo-shirt.cyclic.app/task").then(res=>res.json()).then(data=>{
      setTask(
        data
      )
    })
  }
  function handlesubmittask(e){
  
    setData(e.target.value)
    
  }
  function handlefinal(e)
  {
e.preventDefault()
if(task.length<5){
axios.post("https://lazy-fly-polo-shirt.cyclic.app/task",{data}).then(res=>{
getdata();
})
}
else{
  setDisplay(true)
  alert("daily limit exceed")
}
  }
  function handledelet(id)
  {
    axios.delete(`https://lazy-fly-polo-shirt.cyclic.app/task/${id}`).then(()=>{
      getdata();
    })
  }

  useEffect(()=>{
    getdata();
  },[])

  return (
    <div>
    <p>Hello</p>
    
   
    <p>Good to see You here</p>
    <p>Your total task for day is:-{task.length}</p>
    {
      task.map((ele,i)=>

        <>
        <li>{ele.data}<button onClick={()=>handledelet(ele.id)}>Delete</button></li>
        </>
      )
    }
    
    <input onChange={handlesubmittask} name="data"/>
    <button disabled={display} onClick={handlefinal}>Add Task</button></div>
  )
}

export default Add_task;