import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewTask from './NewTask';
export const todoAppContext=createContext()

function App() {
  const [addItem, setAddItem] = useState([])
  return (
    <div>
      <todoAppContext.Provider value={[addItem,setAddItem]}>
        <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='addTask'element={<NewTask/>}/>
        </Routes>
        </BrowserRouter>
      </todoAppContext.Provider>
    </div>
  );
}

export default App;
