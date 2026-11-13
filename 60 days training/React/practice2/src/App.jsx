import { useState,createContext } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'

export const dataShare=createContext();
function App() {
  
const [shareTask, setShareTask]=useState(null);
const [searchName, setSearchName]=useState("");

  return (
    <>
     <dataShare.Provider value={shareTask} >
            {/* <TaskItem/> */}
            <Header searchName={setSearchName} />

      <TaskForm setShareTask={setShareTask}/>
      <TaskItem searchName={searchName}/>

        </dataShare.Provider>
      
    </>
  )
}

export default App
