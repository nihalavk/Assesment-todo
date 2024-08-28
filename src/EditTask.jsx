import React, { useContext, useState } from 'react'
import { todoAppContext } from './App'
function EditTask() {
    const [addItem,setAddItem]=useContext(todoAppContext)
    const {id}=useParams();
    const info=add.find((item)=>item.id===id)
    const [data, setData] = useState({
      id:info.id,
      task:info.task,
      date:info.date
    })
    const changeDetails= (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value})
      };
  
      const saveData = () => {
        const update=add.map((edit)=>
        edit.id==id?{...edit,...data}:edit)
        setAdd(update)
        addNew('/')};
  return (
    <div>

    </div>
  )
}

export default EditTask