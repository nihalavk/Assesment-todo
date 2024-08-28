import React, { useContext } from 'react'
import 'react-bootstrap'
import './Home.css'
import { MdOutlineAccessAlarms } from "react-icons/md";
import { todoAppContext } from './App';
import {Form} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';

function Home() {
    const [addItem,setAddItem]=useContext(todoAppContext)
    const {id}=useParams();
    const info=addItem.find((item)=>item.id===id)
    const addNewTask=useNavigate();
    const newTask=()=>{
     addNewTask('/addTask')}
    const deleteTask=(e)=>{
    const delId = e.target.value;
    let delIndex = null;
    addItem.forEach((row,index) => {
      if(row['id'] == delId){
      delIndex = index;
      }});
    addItem.splice(delIndex,1); 
    addNewTask('/')
    const toggleStatus = (e) => {
        const updatedTasks = addItem.map((task) =>
          task.id === e ? { ...task, status: !task.status } : task
        );
        setAddItem(updatedTasks);
      };
  }
  return (
    <div>
      <div className="nav">
        <div className="nav-head">
            <div className="nav-icon"><MdOutlineAccessAlarms /></div>
            <div className="nav-text">TASKIFY</div>       
        </div>
      </div> 
      <div className="main-content">
            <div className="main-head">My Tasks</div>
            <div className="search-bar">
            <Form.Control
              type="text"
              placeholder="Search..."/>
            </div>
        </div>
        {addItem.map((view)=>
        <div className="task-components">
          <div className="component1">
            <div className="task-name">{view.task}</div>
            <div className="task-date">{view.date}</div>
            <div className="task-due">due</div>
            <div className="task-status">{view.status}</div>
          </div>
          <div className="component2">
            
            <div className="but1"><button onClick={()=>addNewTask(`/edit/${view.id}`)}>edit</button></div>
            <div className="but1" onClick={deleteTask}><button>delete</button></div>
          </div>
        </div>
        )}
        <div className="but1" onClick={addNewTask}><button>add</button></div>
    </div>
  )
}

export default Home