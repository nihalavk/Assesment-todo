import React, { useContext, useState } from 'react'
import { todoAppContext } from './App'
import { useNavigate } from 'react-router'
import {v4 as uuidv4} from 'uuid'
function NewTask() {
    const addNewTask=useNavigate
    const [addItem,setAddItem]=useContext(todoAppContext)
    const [data,setData] = useState({task:"",date:"",id:uuidv4()})
    console.log(data.id)
    const changeDetails=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value})
    }
    const saveData=()=>{
        {setAddItem([...addItem,data])}
        addNewTask('/')
    }
  return (
    <div>
        <div className="headParts">
        <div className='todocreate'><label>Create Task : </label>
        <input type="text" value={data.task} name='task' onChange={changeDetails} />
        <br />
        <label>Due Date: </label>
        <input type="date" value={data.date} name='date' onChange={changeDetails}/>
        <br />
        <button onClick={saveData}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask