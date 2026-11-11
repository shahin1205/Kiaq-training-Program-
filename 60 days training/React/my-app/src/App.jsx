import { useEffect, useState } from 'react'

import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import SearchTask from './components/SearchTask'
function App() {

  const initialTask = [
  { id: 1, name: "Arun Kumar", taskName:"task 1" },
  { id: 2, name: "Priya", taskName:"task 1" },
  { id: 3, name: "Karthik", taskName:"task 1" }
];

  const [task, setTask] = useState(initialTask);

  const handeleAddTask= (newTask)=>{
    setTask([...task, newTask])
  }

  const [searchInput, setSearchInput] = useState("");

  const filterTask = task.filter((searchItem)=>
  `${searchItem.name} ${searchItem.taskName}`
  .toLowerCase()
  .includes(searchInput.toLowerCase())

  );

  function deletefuntion(id){
      setTask((currentTask)=>currentTask.filter((task)=>task.id !== id))
  }
  
  return (
    <>
     <div>
      <TaskForm onAddTask={handeleAddTask}/>

      <SearchTask searchText={setSearchInput}/>

      {/* <SearchTask searchItem={searchInput} setSearchItem={setSearchInput}/> */}

      <TaskList task={filterTask} onDeleteTask={deletefuntion} />


     </div>
    </>
  )

}
export default App
